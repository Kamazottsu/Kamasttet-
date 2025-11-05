
import fs from 'fs';
import path from 'path';
export default function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end();
  const data = req.body;
  const file = path.resolve('./bookings.json');
  let arr = [];
  try{ if(fs.existsSync(file)) arr = JSON.parse(fs.readFileSync(file)); }catch(e){}
  arr.push({id: Date.now(), ...data});
  try{ fs.writeFileSync(file, JSON.stringify(arr,null,2)); }catch(e){ /* on Vercel this may be read-only - for demo only */ }
  res.json({ok:true, booking: data});
}
