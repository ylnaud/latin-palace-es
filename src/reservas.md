---
layout: layouts/base.njk
title: Reservas - El Latin Palace
description: Reserva tu mesa o entrada para eventos en El Latin Palace, la discoteca más animada de Las Palmas de Gran Canaria.
hero: true
---

# Reservas en El Latin Palace 📅

¿Quieres asegurar tu lugar en nuestra pista o reservar para una ocasión especial? ¡Reserva fácil y rápido!

## 🧑‍🤝‍🧑 Tipos de Reservas

- 🥂 **Mesa VIP** – Ideal para celebraciones
- 🎂 **Cumpleaños y despedidas**
- 🎉 **Reservas para eventos especiales**
- 📸 **Reservas para influencers y creadores**

---

## 📩 Formulario de reserva

<form name="reservas" method="POST" data-netlify="true">
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre completo:</label>
    <input type="text" class="form-control fs-2 " id="nombre" name="nombre" required>
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico:</label>
    <input type="email" class="form-control fs-2 text-4" id="email" name="email" required>
  </div>
  <div class="mb-3">
    <label for="tipo" class="form-label">Tipo de reserva:</label>
    <select class="form-control fs-2" name="tipo" required>
      <option value="mesa">Mesa VIP</option>
      <option value="evento">Evento</option>
      <option value="cumpleaños">Cumpleaños</option>
    </select>
  </div>
  <div class="mb-3">
    <label for="mensaje" class="form-label">Mensaje adicional:</label>
    <textarea class="form-control fs-2" id="mensaje" name="mensaje" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Enviar reserva</button>
</form>




---

📞 ¿Tienes dudas? Escríbenos a **contacto@latinpalace.com**
