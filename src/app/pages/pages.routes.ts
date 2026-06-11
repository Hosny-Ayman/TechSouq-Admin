import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';

export default [
    { path: '', loadComponent: () => import('./dashboard/dashboard').then((c) => c.Dashboard) },

    { path: 'orders', loadComponent: () => import('./orders/orders').then((c) => c.Orders) },
    { path: 'products', loadComponent: () => import('./products/products').then((c) => c.Products) },
    { path: 'users', loadComponent: () => import('./users/users').then((c) => c.Users) },
    { path: 'coupons', loadComponent: () => import('./coupons/coupons').then((c) => c.Coupons) },
    { path: 'orderDetils/:id', loadComponent: () => import('./order-details/order-details').then((c) => c.OrderDetails) },

    { path: '**', redirectTo: '/notfound' }
] as Routes;
