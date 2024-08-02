'use client'

import UpdateBookInfo from "@/components/UpdateBookInfo";

export default function ShowBook() {
  return (
    <UpdateBookInfo />
  )
}

app/show-book/[id]/page.tsx:
'use client'

import ShowBookDetails from "@/components/ShowBookDetails";

export default function ShowBook() {
  return (
    <ShowBookDetails />
  )
}
