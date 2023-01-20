import Heading from "./Heading";

const ContactInfo = ({contact}) => {
  const {name, email, address} = contact || {}
  const {street, suite, city, zipcode} = address || {}

    if (!contact) {
      return <Heading tag='h3' text='Empty Contact'/>
}


return (
  <>
    <Heading tag='h3' text={name}/>
    <div>
 Email: {email}
    </div>
    
    <div>
Address: {`${street}, ${suite}, ${city}, ${zipcode}`}
    </div>
  </>
)
}

export default ContactInfo