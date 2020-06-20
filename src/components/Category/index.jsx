import React from 'react'
import { CategoryCard } from '../CategoryCard'
import styles from './index.module.css'

const Category = ({ title, links }) => (
    <div className={styles.category}>
        <h1 className={styles.title}>{title}</h1>
        <ul>
            {links.map(({ name, link }, index) => (
                <CategoryCard key={index} name={name} link={link} />
            ))}
        </ul>
    </div>
)

export {
    Category,
    Category as default
}