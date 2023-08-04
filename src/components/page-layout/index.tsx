import React, { memo } from 'react'
import { PageLayotProps } from './interface'
import './style.css'

export const PageLayout = memo((props: PageLayotProps) => {
    const { children } = props
    return (
        <main className='page-layout'>{children}</main>
    )
})
