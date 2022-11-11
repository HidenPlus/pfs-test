import * as qs from 'query-string';

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(price)
}

export const stringToCoordinate = (coord: string) => {
    return parseFloat(coord.replace(/^([^,]+),/, "$1.").replace(",", ""))
}

export class LinkCreator {
    static query(object: Record<string, any>) {
        return qs.stringify(object);
    }
    static toQuery(object: Record<string, any>, path = "/") {
        const query = this.query(object);
        return path + '?' + query;
    }
}

export const menuItems = {
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
}