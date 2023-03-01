import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Post } from './../../models/posts.model';

export interface PostsState extends EntityState<Post> {
  count: number;
}

export const postsAdapter = createEntityAdapter<Post>({});

export const initialState: PostsState = postsAdapter.getInitialState({
  count: 0,
});

