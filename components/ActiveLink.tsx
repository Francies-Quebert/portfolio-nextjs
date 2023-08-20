
import { usePathname } from 'next/navigation'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren, useState, useEffect } from 'react'

type ActiveLinkProps = LinkProps & {
  className?: string
  activeClassName: string
  name: string
}

const ActiveLink = ({
  children,
  activeClassName,
  className = '',
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  // const { asPath, isReady } = useRouter()
  const pathname = usePathname()
  const [computedClassName, setComputedClassName] = useState<string>(className)

  useEffect(() => {
    // console.log(pathname)
    // Check if the router fields are updated client-side
    // if (pathname) {
    //   // Dynamic route will be matched via props.as
    //   // Static route will be matched via props.href
    //   const linkPathname = new URL(
    //     (props.as || props.href) as string,
    //     location.href
    //   ).pathname

    //   // Using URL().pathname to get rid of query and hash
    const activePathName = pathname
    // console.log(props.href)

    const newClassName: string = (props.href == activePathName) ? `${className} ${activeClassName}`.trim() : className

    // const newClassName =
    //   (props.href !== '/' ? activePathNameprops.href : props.href === activePathName)
    //     ? `${className} ${activeClassName}`.trim()
    //     : className

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName)
    }

  }, [
    pathname
  ])

  return (
    <Link title={props.name} className={computedClassName} {...props} href={props.href}>
      {children}
    </Link>
  )
}

export default ActiveLink