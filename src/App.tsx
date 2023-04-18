import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from './components/Post';

import "./styles/global.css";
import styles from "./App.module.css";
import { posts } from "./utils/posts";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts?.map((post) => (
            <Post key={post?.id} author={post?.author} content={post?.content} initialComments={post?.comments} publishedAt={post?.publishedAt} />
          ))}
        </main>
      </div>
    </div>
  );
}
