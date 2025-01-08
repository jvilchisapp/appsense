import{c as g,r as a,s as c}from"./index-Dqil9zrM.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=g("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]),h=()=>{const[t,o]=a.useState([]),[n,d]=a.useState(!0),[l,i]=a.useState(null),u=async()=>{try{const{data:r,error:e}=await c.from("contact_messages").select("*").order("created_at",{ascending:!1});if(e)throw e;o(r||[])}catch(r){console.error("Error fetching messages:",r),i("Failed to load messages")}finally{d(!1)}},f=async r=>{try{const{error:e}=await c.from("contact_messages").update({read:!0}).eq("id",r);if(e)throw e;o(t.map(s=>s.id===r?{...s,read:!0}:s))}catch(e){console.error("Error marking message as read:",e)}};return a.useEffect(()=>{u()},[]),{messages:t,loading:n,error:l,markAsRead:f}};export{p as M,h as u};
