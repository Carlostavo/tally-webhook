import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const payload = req.body; // JSON que envía Tally

    const { data, error } = await supabase
      .from('cuestionario_comportamiento_proambiental_autosustentabilidad')
      .insert([{
        "Nombre del encuestador": payload["Nombre del encuestador"],
        "Nombre del encuestado": payload["Nombre del encuestado"],
        "Fecha": payload["Fecha"],
        "Hora": payload["Hora"],
        "Sexo": payload["Sexo"],
        "Edad": payload["Edad"],
        "Estado civil": payload["Estado civil"],
        "Grupo": payload["Grupo"],
        "Subgrupo": payload["Subgrupo"],
        "Número de integrantes en la familia": payload["Número de integrantes en la familia"],
        "0 - 10 años": payload["0 - 10 años"],
        "11 - 25 años": payload["11 - 25 años"],
        "26 - 50 años": payload["26 - 50 años"],
        "51 - 90 años": payload["51 - 90 años"],
        "Nivel de educación del jefe del hogar": payload["Nivel de educación del jefe del hogar"],
        "Situación laboral del jefe del hogar": payload["Situación laboral del jefe del hogar"],
        "Ingreso estimado mensual del jefe del hogar": payload["Ingreso estimado mensual del jefe del hogar"],
        "Tipo de hogar": payload["Tipo de hogar"],
        "¿Conoce lo que son los desechos sólidos domiciliarios?": payload["¿Conoce lo que son los desechos sólidos domiciliarios?"],
        "¿Cree usted que existe un comportamiento adecuado en el manejo de los desechos sólidos domiciliarios en la comunidad?": payload["¿Cree usted que existe un comportamiento adecuado en el manejo de los desechos sólidos domiciliarios en la comunidad?"],
        "¿Se debe separar los desechos sólidos según su origen?": payload["¿Se debe separar los desechos sólidos según su origen?"],
        "¿Es importante la correcta clasificación de los desechos sólidos orgánicos e inorgánicos en el hogar?": payload["¿Es importante la correcta clasificación de los desechos sólidos orgánicos e inorgánicos en el hogar?"],
        "¿Cree que el comportamiento de la comunidad influye en la acumulación de desechos?": payload["¿Cree que el comportamiento de la comunidad influye en la acumulación de desechos?"],
        "¿Dedica tiempo para reducir, reutilizar o reciclar?": payload["¿Dedica tiempo para reducir, reutilizar o reciclar?"],
        "¿Los desechos sólidos son un gran problema para su comunidad?": payload["¿Los desechos sólidos son un gran problema para su comunidad?"],
        "¿Le preocupa el exceso de desechos sólidos domiciliarios?": payload["¿Le preocupa el exceso de desechos sólidos domiciliarios?"],
        "¿Considera que los desechos contaminan el ambiente?": payload["¿Considera que los desechos contaminan el ambiente?"],
        "¿Le afecta emocionalmente cuando escucha noticias sobre la contaminación?": payload["¿Le afecta emocionalmente cuando escucha noticias sobre la contaminación?"],
        "¿Siente frustración debido a la falta de acciones ambientales?": payload["¿Siente frustración debido a la falta de acciones ambientales?"],
        "¿Considera importante pensar en el tipo de planeta que dejamos a futuras generaciones?": payload["¿Considera importante pensar en el tipo de planeta que dejamos a futuras generaciones?"],
        "¿Es consciente del impacto de los desechos sólidos en la salud y el ambiente?": payload["¿Es consciente del impacto de los desechos sólidos en la salud y el ambiente?"],
        "¿Investiga frecuentemente acerca de temas medio ambientales?": payload["¿Investiga frecuentemente acerca de temas medio ambientales?"],
        "¿Conoce las consecuencias de la acumulación de los desechos sólidos domiciliarios?": payload["¿Conoce las consecuencias de la acumulación de los desechos sólidos domiciliarios?"],
        "¿Conoce los beneficios de reutilizar un residuo domiciliario?": payload["¿Conoce los beneficios de reutilizar un residuo domiciliario?"],
        "¿La falta de información es un obstáculo para la correcta gestión de los residuos sólidos domiciliarios?": payload["¿La falta de información es un obstáculo para la correcta gestión de los residuos sólidos domiciliarios?"],
        "¿Los desechos orgánicos generados en el hogar pueden tener otra funcionalidad?": payload["¿Los desechos orgánicos generados en el hogar pueden tener otra funcionalidad?"],
        "¿La acumulación de desechos afectan a la salud de la población?": payload["¿La acumulación de desechos afectan a la salud de la población?"],
        "¿La reducción, reciclaje y la reutilización de los desechos sólidos puede cuidar al medio ambiente y a la vida silvestre?": payload["¿La reducción, reciclaje y la reutilización de los desechos sólidos puede cuidar al medio ambiente y a la vida silvestre?"],
        "¿Cree que la transformación de desechos sólidos en nuevos productos puede contribuir significativamente a la reducción de la generación de desechos?": payload["¿Cree que la transformación de desechos sólidos en nuevos productos puede contribuir significativamente a la reducción de la generación de desechos?"],
        "¿Necesita más información acerca de educación ambiental?": payload["¿Necesita más información acerca de educación ambiental?"],
        "¿En su hogar practica la separación de los desechos para el reciclaje y le representa algún ingreso?": payload["¿En su hogar practica la separación de los desechos para el reciclaje y le representa algún ingreso?"],
        "¿Los desechos sólidos generados en el hogar pueden ser reutilizados para una nueva función o creación de un producto?": payload["¿Los desechos sólidos generados en el hogar pueden ser reutilizados para una nueva función o creación de un producto?"],
        "¿Cree que el manejo adecuado de los desechos sólidos domiciliarios podría aportar al desarrollo económico comunitario?": payload["¿Cree que el manejo adecuado de los desechos sólidos domiciliarios podría aportar al desarrollo económico comunitario?"],
        "¿Los emprendimientos en base a la reutilización de los desechos aporta a su economía?": payload["¿Los emprendimientos en base a la reutilización de los desechos aporta a su economía?"],
        "¿El manejo adecuado de los desechos sólidos domiciliarios ofrece oportunidades para el emprendimiento?": payload["¿El manejo adecuado de los desechos sólidos domiciliarios ofrece oportunidades para el emprendimiento?"],
        "¿Es posible reducir la generación de residuos sólidos domiciliarios por medio de eventos de concientización?": payload["¿Es posible reducir la generación de residuos sólidos domiciliarios por medio de eventos de concientización?"],
        "¿Participaría en talleres de buenas prácticas y capacitaciones para el correcto manejo de los desechos sólidos domiciliarios?": payload["¿Participaría en talleres de buenas prácticas y capacitaciones para el correcto manejo de los desechos sólidos domiciliarios?"],
        "¿El manejo adecuado de los desechos sólidos domiciliarios puede tener un impacto significativo al medio ambiente?": payload["¿El manejo adecuado de los desechos sólidos domiciliarios puede tener un impacto significativo al medio ambiente?"],
        "¿Está dispuesto a participar en un emprendimiento en base al uso de los desechos sólidos?": payload["¿Está dispuesto a participar en un emprendimiento en base al uso de los desechos sólidos?"],
        "¿Participaría a una feria de emprendimientos comunitarios en base a desechos domiciliarios reutilizados?": payload["¿Participaría a una feria de emprendimientos comunitarios en base a desechos domiciliarios reutilizados?"]
      }]);

    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error procesando webhook' });
  }
}

