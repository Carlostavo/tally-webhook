// /api/tally-webhook.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const supabaseUrl = 'https://dutapywxsiuxboqsjqvf.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1dGFweXd4c2l1eGJvcXNqcXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MTk1MTUsImV4cCI6MjA2OTI5NTUxNX0.SBIDeV_WAWlyLs-ROD1ibXtqqY5bbbh0gouY8gRB9Y4';

  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { form_response } = req.body;

  if (!form_response) {
    return res.status(400).json({ error: 'Formato inválido' });
  }

  const respuestas = {};

  for (const answer of form_response.answers) {
    const ref = answer.field.ref;

    if (ref === 'nombre') respuestas.nombre = answer.text;
    if (ref === 'apellido') respuestas.apellido = answer.text;
    if (ref === 'numero_celular') respuestas.numero_celular = answer.text;
    if (ref === 'fecha') respuestas.fecha = answer.date;
    if (ref === 'hora') respuestas.hora = answer.text;
    if (ref === 'color_favorito') respuestas.color_favorito = answer.text;
  }

  const { error } = await supabase
    .from('formulario_respuestas')
    .insert([respuestas]);

  if (error) {
    console.error('Error al insertar en Supabase:', error);
    return res.status(500).json({ error: 'Error al insertar en Supabase' });
  }

  return res.status(200).json({ message: 'Datos insertados correctamente' });
}
