import {
    CircleHelp,
    CircleX,
    CircleCheck,
    Clock,
  } from "lucide-react";
  

export const dataExample = [
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de la tarea 1",
      status: "completed",
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de la tarea 2",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripción de la tarea 3",
      status: "pending",
    },
    {
      id: 4,
      title: "Tarea 4",
      description: "Descripción de la tarea 4",
      status: "canceled",
    },
    {
      id: 5,
      title: "Tarea 5",
      description: "Descripción de la tarea 5",
      status: "completed",
    },
    {
      id: 6,
      title: "Tarea 6",
      description: "Descripción de la tarea 6",
      status: "in-progress",
    },
    {
      id: 7,
      title: "Tarea 7",
      description: "Descripción de la tarea 7",
      status: "pending",
    },
    {
      id: 8,
      title: "Tarea 8",
      description: "Descripción de la tarea 8",
      status: "canceled",
    },
    {
      id: 9,
      title: "Tarea 9",
      description: "Descripción de la tarea 9",
      status: "completed",
    },
    {
      id: 10,
      title: "Tarea 10",
      description: "Descripción de la tarea 10",
      status: "in-progress",
    },
  ];
  
  export const dataStatus: StatusProps[] = [
    {
      id: 1,
      value: "completed",
      label: "Completado",
      color: "indigo",
      icon: <CircleCheck />,
    },
    {
      id: 2,
      value: "in-progress",
      label: "En progreso",
      color: "cyan",
      icon: <Clock />,
    },
    {
      id: 3,
      value: "pending",
      label: "Pendiente",
      color: "orange",
      icon: <CircleHelp />,
    },
    {
      id: 4,
      value: "canceled",
      label: "Cancelado",
      color: "crimson",
      icon: <CircleX />,
    },
  ];
  
  interface StatusProps {
    id: number;
    value: string;
    label: string;
    color: "indigo" | "cyan" | "orange" | "crimson";
    icon: JSX.Element;
  }