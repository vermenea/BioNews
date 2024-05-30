import Image from 'next/image';
import React from 'react';
import github from '@/public/github.png';
import linkedin from '@/public/linkedin.png';
import email from '@/public/email.png';
import Link from 'next/link';

const icons = [
    { "title": "Github", "image": github, "href": "https://github.com/vermenea"},
    { "title": "Linkedin", "image": linkedin, "href": "http://www.linkedin.com/in/vermenea"},
    { "title": "Email", "image": email , "href": "mailto:vermenea@gmail.com"},
];

export default function Socials() {
    return (
        <section className="socials">
            {icons.map((icon, index) => (
                <div key={index} className="icon">
                    <Link href={icon.href}>
                    <Image src={icon.image} alt={icon.title} width={25} height={25} />
                    </Link>   
                </div>
            ))}
        </section>
    );
}
