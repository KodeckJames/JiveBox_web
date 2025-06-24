"use client"
import Link from "next/link"

export default function FeedHeader() {
  return (
    <>
          <nav className=" flex text-white w-full justify-between">
            <Link href={"./for-you"}>
               For You
            </Link>
            <Link href={"./following"}>
                Following
            </Link>
        </nav>
    </>
  )
}
