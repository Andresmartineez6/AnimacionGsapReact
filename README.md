# Animación GSAP React

Una aplicación React moderna que muestra animaciones interactivas de perfiles de equipo usando GSAP (GreenSock Animation Platform).

## Características

- **Animaciones fluidas**: Utiliza GSAP para animaciones suaves y profesionales
- **Responsive Design**: Funciona perfectamente en desktop y dispositivos móviles
- **Arquitectura escalable**: Estructura de componentes React limpia y modular
- **Interacciones intuitivas**: Hover en desktop y touch en móvil
- **Tipografía animada**: Efectos de texto con SplitText de GSAP

## Estructura del Proyecto

```
src/
├── components/
│   ├── TeamSection.jsx      # Componente principal
│   ├── ProfileImages.jsx    # Manejo de imágenes de perfil
│   └── ProfileNames.jsx     # Manejo de nombres del equipo
├── hooks/
│   └── useTeamAnimation.js  # Hook personalizado para animaciones
├── styles/
│   └── TeamSection.css      # Estilos del componente
├── assets/
│   └── images/              # Imágenes del proyecto
└── App.js                   # Componente raíz
```

## Tecnologías Utilizadas

- **React 19**: Framework de JavaScript para interfaces de usuario
- **GSAP 3.13**: Biblioteca de animaciones de alto rendimiento
- **CSS3**: Estilos modernos con Flexbox y Grid
- **Responsive Design**: Media queries para adaptabilidad

## Funcionalidades

### Desktop
- **Hover Effects**: Al pasar el mouse sobre una imagen, esta se agranda y muestra el nombre correspondiente
- **Transiciones suaves**: Animaciones fluidas entre estados

### Móvil
- **Touch Interactions**: Toca una imagen para activar la animación
- **Responsive Layout**: Diseño optimizado para pantallas pequeñas
- **Touch Outside**: Toca fuera de las imágenes para volver al estado inicial

## Personalización

### Agregar nuevos miembros del equipo

Edita el array `teamMembers` en `TeamSection.jsx`:

```javascript
const teamMembers = [
  { name: 'Nuevo Miembro', image: '/ruta/a/imagen.jpg' },
  // ... más miembros
];
```

### Modificar animaciones

Las animaciones se pueden personalizar en el hook `useTeamAnimation.js`:

```javascript
// Cambiar duración y easing
gsap.to(element, {
  duration: 0.5,     // Duración en segundos
  ease: 'power2.out' // Tipo de easing
});
```

## Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm start
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

## Notas de Desarrollo

- El proyecto utiliza hooks personalizados para separar la lógica de animación
- Los componentes están diseñados para ser reutilizables y escalables
- Se implementa cleanup automático para evitar memory leaks
- Responsive design con breakpoint en 900px

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
