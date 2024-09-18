import logoSvg from '@/app/assets/images/logo.svg'
import Image from 'next/image'
import './header.scss'

export const Header = () => {
  const currentDate = new Date()
  const dateToday = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  }).format(currentDate).replace('-feira', '')

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return(
    <header>
      <Image src={logoSvg} alt='logo-focal-point'/>
      <span className='welcome'>Bem-vindo de volta</span>
      <span className='date'>{capitalizeFirstLetter(dateToday)}</span>
    </header>
  )
}