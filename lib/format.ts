export function formatPrice(price: number, currency = "ARS"): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatWhatsAppUrl(phone: string, message?: string): string {
  const clean = phone.replace(/\D/g, "");
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent("Hola, vi su página y me interesa consultar.");
  return `https://wa.me/${clean}?text=${text}`;
}
