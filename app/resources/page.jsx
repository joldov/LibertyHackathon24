'use client';

import Image from 'next/image';
import styles from './page.module.css';

const resources = [
  {
    imageUrl: '/images/resource-images/pic1.jpg',
    text: 'Learn the basics of Next.js.',
    description: 'Dive into the world of Next.js with this introductory course. Learn how to set up your Next.js environment and explore core features like server-side rendering and dynamic routing.',
    tags: ['Next.js', 'JavaScript', 'Web Development'],
    username: 'CharlesLeclerc',
  },
  {
    imageUrl: '/images/resource-images/pic2.jpg',
    text: 'Advanced techniques for frontend development.',
    description: 'Take your frontend development skills to the next level. Cover topics such as state management with Redux, optimizing performance, and implementing complex animations.',
    tags: ['Frontend', 'React', 'Redux', 'JavaScript'],
    username: 'OscarPiastri',
  },
  {
    imageUrl: '/images/resource-images/pic3.jpg',
    text: 'Backend development with Node.js.',
    description: 'Master backend development with Node.js. Learn how to create robust server-side applications, interact with databases, and deploy your applications to the cloud.',
    tags: ['Node.js', 'Backend', 'JavaScript', 'Databases'],
    username: 'BackendGuru',
  },
  {
    imageUrl: '/images/resource-images/pic4.jpg',
    text: 'Brush up on your Git knowledge.',
    description: 'Refresh and enhance your Git skills. Learn basic commands, advanced techniques, branch management, and best practices for version control.',
    tags: ['Git', 'Version Control', 'GitHub'],
    username: 'AyrtonSenna',
  },
  {
    imageUrl: '/images/resource-images/pic5.jpeg',
    text: 'Advanced JavaScript Concepts: Event Loop and Concurrency.',
    description: 'Gain a deep understanding of JavaScript\'s event loop and concurrency model. Learn how asynchronous operations work with Promises, async/await, and Web APIs.',
    tags: ['JavaScript', 'Event Loop', 'Concurrency'],
    username: 'JavaScriptNinja',
  },
  {
    imageUrl: '/images/resource-images/pic6.jpg',
    text: 'Learn about technical analysis.',
    description: 'Discover the fundamentals of technical analysis. Learn how to interpret market data, understand key indicators and patterns, and apply insights for informed trading decisions.',
    tags: ['Technical Analysis', 'Trading', 'Finance'],
    username: 'FinancePro',
  },
];

export default function Resources() {
  return (
    <div className={styles.container}>
      {resources.map((resource) => (
        <div key={resource.imageUrl} className={styles.box}>
          <div className={styles.imageWrapper}>
            <Image
              src={resource.imageUrl}
              alt={`Resource ${resource.text}`}
              layout="responsive"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.username}>Posted by: {resource.username}</p>
            <p className={styles.text}>{resource.text}</p>
            <p className={styles.description}>{resource.description}</p>
            <div className={styles.tags}>
              {resource.tags.map((tag, index) => (
                // eslint-disable-next-line
                <span key={index} className={styles.tag}>{tag}</span>
                // eslint-disable-next-line
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
