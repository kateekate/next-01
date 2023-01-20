import ContactInfo from "@/components/ContactInfo"
import Head from "next/head"

export const getServerSideProps = async (context) => {
  const {id} = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
  const data = await response.json()

  // const data = null отправит на страницу с 404 error 
  if(!data) {
    return {
      notFound: true
  }
}
    return {
      props: {contact: data} 
  }
}

const Contact = ({contact}) => (
 <>
 <Head>
  <title>Contact Card</title>
 </Head>
 <ContactInfo contact={contact} />
 </>
)

export default Contact