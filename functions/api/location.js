export function onRequest(context) {
  const cf = context.request.cf;
  const regionMap = {
    'New South Wales': 'NSW',
    'Victoria': 'VIC',
    'Queensland': 'QLD',
    'South Australia': 'SA',
    'Western Australia': 'WA',
    'Tasmania': 'TAS',
    'Northern Territory': 'NT',
    'Australian Capital Territory': 'ACT'
  };
  const state = regionMap[cf?.region] || 'NSW';
  return new Response(JSON.stringify({ state }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
