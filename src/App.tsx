import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import './global.css';


const posts: PostType[] = [
  
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/92489945?v=4",
      name: "Roberta Slomski",
      role: "Back end developer @ RocketChat",
    },
    content: [
      {type: 'paragraph', content: 'Oi pessoal.'},

      {type: 'paragraph', content: 'Estou colocando no meu portfólio mais um projeto que desenvolvi em ReactJs.'},

      {type: 'paragraph', content: 'jane.design/doctorcare'},

      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2022-03-11 00:13:02'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/90662086?v=4",
      name: "Ana Luiza",
      role: "Developer @ Go Technology",
    },
    content: [
      {type: 'paragraph', content: 'Olá amigos!'},

      {type: 'paragraph', content: 'Estou estudando Python, ReactJS e banco de dados. Aos amigos que estão na jornada, ficarei feliz se me procurarem para trocarmos figurinhas : D'},

      {type: 'link', content: '#newStudies'}
    ],
    publishedAt: new Date('2022-03-15 10:53:02'),
  },
]

export function App() {
  
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main> 
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              post={post}
              />
            )
          })}
        </main> 

      </div>
    </>
  )
}