"use client";
import { useEffect, useState } from 'react';

export default function OnThisPage({ htmlContent }) {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        const headingElements = tempDiv.querySelectorAll('h2, h3');
        const extractedHeadings = Array.from(headingElements).map(heading => ({
            id: heading.id,
            text: heading.innerText,
            level: heading.tagName.toLowerCase(),
        }));
        setHeadings(extractedHeadings);
    }, [htmlContent]);

    return (
        <aside className="sticky top-20 hidden lg:block w-64 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="font-bold text-lg mb-4">On This Page</h2>
            <ul>
                {headings.map(heading => (
                    <li key={heading.id} className={`mb-2 ${heading.level === 'h3' ? 'ml-4' : ''}`}>
                        <a href={`#${heading.id}`} className="hover:underline text-cyan-600 dark:text-cyan-400">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
} 