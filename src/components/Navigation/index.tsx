import React, { FC } from 'react'
import {
  MagnifyingGlassIcon,
  ClipboardIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

interface Props {}

const Navigation: FC<Props> = () => {
  const onRippleEffect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const btn = e.currentTarget
    const circle = document.createElement('span')
    const diameter = Math.max(btn.clientWidth, btn.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${e.clientX - (btn.offsetLeft + radius)}px`
    circle.style.top = `${e.clientY - (btn.offsetTop + radius)}px`
    circle.classList.add('ripple')
    circle.style.zIndex = '9999'

    const ripple = btn.getElementsByClassName('ripple')[0]

    if (ripple) ripple.remove()

    btn.appendChild(circle)
  }
  return (
    <nav className="fixed bottom-0 z-10 w-full cursor-pointer select-none border-t bg-white">
      <ul className="flex">
        <li className="relative flex-1 overflow-hidden py-1.5">
          <button className="flex w-full flex-col items-center">
            <HomeIcon className="h-6 w-6" />
            <div className="font-bold">Home</div>
          </button>
        </li>
        <li className="flex flex-1 flex-col items-center py-1">
          <MagnifyingGlassIcon className="h-6 w-6" />
          <div>Search</div>
        </li>
        <li className="flex flex-1 flex-col items-center py-1">
          <ClipboardIcon className="h-6 w-6" />
          <div>Feed</div>
        </li>
        <li className="flex flex-1 flex-col items-center py-1">
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          <div>Chat</div>
        </li>
        <li className="flex flex-1 flex-col items-center py-1">
          <UserIcon className="h-6 w-6" />
          <div>Profile</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
