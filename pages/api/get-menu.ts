// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: MenuItem[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    result: [
    {
      name: 'propiedades',
      path: '/',
      icon: 'home',
      children: [
        {
        name: 'Nuevas Construcciones',
        path: '/',
        icon: 'home',
      },
      {
        name: 'Usados',
        path: '/',
        icon: 'home',
      }
      ]
    },
    {
      name: 'financiamiento',
      path: '/about',
      icon: 'info',
      children: [
        {
        name: 'Financiamiento para extranjeros',
        path: '/',
        icon: 'home',
      },
      {
        name: 'Financiamiento para residentes',
        path: '/',
        icon: 'home',
      },
      {
        name: 'Calculadora para Hipotecas',
        path: '/',
        icon: 'home',
      }
      ]
    },
    {
      name: 'servicios',
      path: '/contact',
      icon: 'mail',
      children: [
        {
        name: 'Asesoria Contable y Legal',
        path: '/',
        icon: 'home',
      },
      {
        name: 'Prestamos Hipotecarios para Extranjeros',
        path: '/',
        icon: 'home',
      }
      ]
    },
    {
      name: 'administración de propiedades',
      path: '/contact',
      icon: 'mail',
    },
    {
      name: 'renta en dólares',
      path: '/contact',
      icon: 'mail',
    },
    {
      name: 'nosotros',
      path: '/contact',
      icon: 'mail',
    },
    {
      name: 'contáctenos',
      path: '/contact',
      icon: 'mail',

    }
    ]
  })
  // res.status(200).json({ name: 'John Doe' })
}
