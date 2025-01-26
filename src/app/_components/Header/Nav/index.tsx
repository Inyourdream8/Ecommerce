import React from 'react'

import { useAuth } from '../../../_providers/Auth'
import { Header as HeaderType } from '../../../payloads/payload-types'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSlink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === underfined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSlink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {!user && (
        <Button
          el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
      )}
      {user && <CartLink />}
    </nav>
  )
}
