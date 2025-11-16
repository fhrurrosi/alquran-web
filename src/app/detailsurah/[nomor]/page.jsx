import PageClient from "./pageClient"

const Page = async ({ params }) => {
  const {nomor} = await params
  return <PageClient nomorAwal={nomor} />

}

export default Page