
import qr from 'qrcode'


export async function onRequestPost({ request }) {

    const body = await request.text()
    const { url } = JSON.parse(body)
          
    const qrImage = await qr.toString(url,
    { 
      type: 'svg', 
      color: {
        light: '#3685FF',
        dark: '#ffffff'
      }
   })
  
  return new Response(JSON.stringify({ svg: qrImage }), {
    headers: {
        'Content-Type': 'Application/json'
    }
  })
}
