export type {
  AbortStreamedPostInput,
  AbortStreamedPostResult,
  AppendPostInput,
  ApplyPostDeltaInput,
  ApplyPostDeltaResult,
  Channel,
  ChatEvent,
  CompleteStreamedPostInput,
  ListPostsInput,
  ListThreadsInput,
  Post,
  PostPage,
  StartStreamedPostInput,
  StartStreamedPostResult,
  ThreadPage,
} from "@khoralabs/chat";

import type {
  AbortStreamedPostInput,
  AbortStreamedPostResult,
  AppendPostInput,
  ApplyPostDeltaInput,
  ApplyPostDeltaResult,
  Channel,
  ChatEvent,
  CompleteStreamedPostInput,
  ListPostsInput,
  ListThreadsInput,
  Post,
  PostPage,
  StartStreamedPostInput,
  StartStreamedPostResult,
  ThreadPage,
} from "@khoralabs/chat";

export {
  type PostToDisplayOptions,
  postsToDisplayMessages,
  postToDisplayMessage,
} from "./adapters.ts";

/**
 * Thin host port for React chat UI.
 * Prefer `@khoralabs/chat` `ChatClient` once that export is on the published package.
 */
export type ChatClient = {
  getChannel(id: string): Promise<Channel>;
  listThreads(input: ListThreadsInput): Promise<ThreadPage>;
  listPosts(input: ListPostsInput): Promise<PostPage>;
  appendPost(input: AppendPostInput): Promise<Post>;
  startStreamedPost?(input: StartStreamedPostInput): Promise<StartStreamedPostResult>;
  applyPostDelta?(input: ApplyPostDeltaInput): Promise<ApplyPostDeltaResult>;
  completeStreamedPost?(input: CompleteStreamedPostInput): Promise<Post>;
  abortStreamedPost?(input: AbortStreamedPostInput): Promise<AbortStreamedPostResult["post"]>;
  subscribeToThread?(threadId: string, handler: (event: ChatEvent) => void): () => void;
};

/** Upsert a post into a list sorted by `index` (stream / live updates). */
export function mergePostIntoList(posts: Post[], post: Post): Post[] {
  const index = posts.findIndex((item) => item.id === post.id);
  if (index === -1) {
    return [...posts, post].sort((a, b) => a.index - b.index);
  }
  const next = [...posts];
  next[index] = post;
  return next;
}

export function postToUiMessage<T>(post: T): T {
  return post;
}

export function postsToUiMessages<T>(posts: T[]): T[] {
  return posts;
}
