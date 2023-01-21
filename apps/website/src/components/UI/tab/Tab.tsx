import clsx from 'clsx'
import React from 'react'

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
}

const Tabs = (props: TabsProps) => {
    const { children, className, ...divProps } = props
    return (
        <div {...divProps} className={clsx("tabs", className)}>
            {children}
        </div>
    )
}

export default Tabs