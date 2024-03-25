"use client"
import Link from 'next/link';
import '@/style/buttons.css';
const BackBtn = () => {
  return  (
    <Link id="btn-back" 
      className="mt-20"
      href="javascript:history.back()"
    >
      Go Back
    </Link>
  )
}

export default BackBtn;