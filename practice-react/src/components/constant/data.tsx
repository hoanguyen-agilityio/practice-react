import {
  report,
  setting,
  home,
  course,
  graduation,
  payment
} from '../../assets/Images'

export const MENU_LIST = [
  {
    icon: home,
    name: 'Home',
    alt: 'icon home',
    ariaLabel: 'Go to home page',
    href: 'javascript:void(0);'
  },
  {
    icon: course,
    name: 'Course',
    alt: 'icon Course',
    ariaLabel: 'Go to course page',
    href: 'javascript:void(0);'
  },
  {
    icon: graduation,
    name: 'Students',
    alt: 'icon Students',
    ariaLabel: 'Go to student page',
    href: 'javascript:void(0);'
  },
  {
    icon: payment,
    name: 'payment',
    alt: 'icon payment',
    ariaLabel: 'Go to payment page',
    href: 'javascript:void(0);'
  },
  {
    icon: report,
    name: 'report',
    alt: 'icon report',
    ariaLabel: 'Go to report page',
    href: 'javascript:void(0);'
  },
  {
    icon: setting,
    name: 'Settings',
    alt: 'icon Settings',
    ariaLabel: 'Go to Setting page',
    href: 'javascript:void(0);'
  }
]

export const FORM_INPUT = [
  {
    nameLabel: 'Name',
    type: 'text',
    name: 'name',
    ariaLabel: 'Enter name'
  },
  {
    nameLabel: 'Email',
    type: 'email',
    name: 'email',
    ariaLabel: 'Enter email'
  },
  {
    nameLabel: 'Phone',
    type: 'tel',
    name: 'phone',
    ariaLabel: 'Enter phone'
  },
  {
    nameLabel: 'Enroll Number',
    type: 'number',
    name: 'enrollNumber',
    ariaLabel: 'Enter enrollNumber'
  },
  {
    nameLabel: 'Date of admission',
    type: 'date',
    name: 'dateOfAdmission',
    ariaLabel: 'Enter date of admission'
  }
]
