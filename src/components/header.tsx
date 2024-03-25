import React from 'react';
function Header ({text}: {text: string}): React.ReactNode {
  return (
  <header id="head" className="flex flex-col mt-20">
    <h1 id="heading" className="h-10 text-6xl">
      {text}
    </h1>
  </header>
  )
}
export default Header;