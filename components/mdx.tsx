import Link from 'next/link'
import Image from 'next/image'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote/rsc'
import {highlight} from 'sugar-high'
import React from 'react'

interface TableData {
    headers: string[];
    rows: string[][];
}

function Table({data}: { data: TableData }) {
    const headers = data.headers.map((header: string, index: number) => (
        <th key={index}>{header}</th>
    ))
    const rows = data.rows.map((row: string[], index: number) => (
        <tr key={index}>
            {row.map((cell: string, cellIndex: number) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ))

    return (
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <div key={`header-${index}`}>
                        {header}
                    </div>
                ))}
            </tr>
            </thead>
            <tbody>
            {rows.map((row, index) => (
                <div key={`row-${index}`}>
                    {row}
                </div>
            ))}
            </tbody>
        </table>
    )
}

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;

    [key: string]: any;
}

function CustomLink(props: CustomLinkProps) {
    const {href, children, ...rest} = props

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...rest}>
            {children}
            </Link>
        )
    }

    if (href.startsWith('#')) {
        return <a {...rest}>{children}</a>
    }

    return <a target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>
}

interface RoundedImageProps {
    src: string;
    alt: string;

    [key: string]: any;
}

function RoundedImage({ src, alt, ...rest }: RoundedImageProps) {
    return <Image src={src} alt={alt} className="rounded-lg" {...rest} />
}


interface CodeProps {
    children: string;

    [key: string]: any;
}

function Code({children, ...props}: CodeProps) {
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{__html: codeHTML}} {...props} />
}

function slugify(str: string) {
    return str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
}

function createHeading(level: number) {
    const Heading = ({children}: { children: React.ReactNode }) => {
        const slug = slugify(children as string)
        return React.createElement(
            `h${level}`,
            {id: slug},
            [
                React.createElement('a', {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: 'anchor',
                }),
            ],
            children
        )
    }

    Heading.displayName = `Heading${level}`

    return Heading
}

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    Table,
}

interface CustomMDXProps {
    source: MDXRemoteSerializeResult;
    components?: any;
}

export function CustomMDX(props: CustomMDXProps) {
    return (
        <MDXRemote
            {...props}
            components={{...components, ...(props.components || {})}}
        />
    )
}