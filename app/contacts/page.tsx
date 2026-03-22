import { CreateButton } from '@/components/Button'
import ContactTable from '@/components/ContactTable'
import Search from '@/components/Search'


function Contact() {
  return (
    <div className='max-w-full mx-auto mt-10'>
        <div className=' flex items-center justify-between gap-1 mb-5'>
        <Search/>
        <CreateButton/>
        </div>
        <ContactTable/>
    </div>
  )
}

export default Contact