import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
       // Use custom components or override default ones
       h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
       h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
       h3: ({ children }) => <h3 className="text-2xl font-semibold mt-4 mb-2">{children}</h3>,
       a: ({ href, children }) => <Link href={href as string} className="text-primary hover:underline">{children}</Link>,
       p: ({ children }) => <p className="my-3">{children}</p>,
       // Merge with existing components
    ...components,
  }
}