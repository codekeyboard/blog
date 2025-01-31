"use strict";(self.webpackChunkm_saim=self.webpackChunkm_saim||[]).push([[2245],{6273:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var t=i(4410),s=i(4848),o=i(8453);const a={slug:"deepseek-r1-and-its-impact-on-reasoning-models",title:"Revolutionizing Reasoning Models with Reinforcement Learning",authors:"saim",tags:["AI","deep learning","reinforcement learning","reasoning models"]},r=void 0,l={authorsImageUrls:[void 0]},d=[{value:"DeepSeek-R1 Training Pipeline",id:"deepseek-r1-training-pipeline",level:2},{value:"How Did They Do It?",id:"how-did-they-do-it",level:2},{value:"Open-R1: The Missing Pieces",id:"open-r1-the-missing-pieces",level:2},{value:"Get Involved",id:"get-involved",level:2}];function h(e){const n={h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"If you\u2019ve ever struggled with a tough math problem, you know how useful it is to think a little longer and work through it carefully. OpenAI\u2019s o1 model showed that when LLMs are trained to do the same\u2014by using more compute during inference\u2014they get significantly better at solving reasoning tasks like mathematics, coding, and logic."}),"\n",(0,s.jsx)(n.p,{children:"However, the recipe behind OpenAI\u2019s reasoning models has been a well-kept secret. That is, until last week, when DeepSeek released their DeepSeek-R1 model and promptly broke the internet (and the stock market!)."}),"\n",(0,s.jsx)(n.p,{children:"Besides performing as well or better than o1, the DeepSeek-R1 release was accompanied by a detailed tech report that outlined the key steps of their training recipe. This recipe involved several innovations, most notably the application of pure reinforcement learning to teach a base language model how to reason without any human supervision. As shown in the figure below, making a powerful reasoning model is now very simple if you have access to a capable base model and a high-quality data mixture:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DeepSeek-R1 Diagram",src:i(215).A+"",width:"1162",height:"501"})}),"\n",(0,s.jsx)(n.h2,{id:"deepseek-r1-training-pipeline",children:"DeepSeek-R1 Training Pipeline"}),"\n",(0,s.jsx)(n.p,{children:"However, the DeepSeek-R1 release leaves open several questions about:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data collection"}),": How were the reasoning-specific datasets curated?"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Model training"}),": No training code was released by DeepSeek, so it is unknown which hyperparameters work best and how they differ across different model families and scales."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scaling laws"}),": What are the compute and data trade-offs in training reasoning models?"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These questions prompted us to launch the ",(0,s.jsx)(n.strong,{children:"Open-R1"})," project, an initiative to systematically reconstruct DeepSeek-R1\u2019s data and training pipeline, validate its claims, and push the boundaries of open reasoning models. By building Open-R1, we aim to provide transparency on how reinforcement learning can enhance reasoning, share reproducible insights with the open-source community, and create a foundation for future models to leverage these techniques."]}),"\n",(0,s.jsx)(n.h2,{id:"how-did-they-do-it",children:"How Did They Do It?"}),"\n",(0,s.jsxs)(n.p,{children:["DeepSeek-R1 is a reasoning model built on the foundation of ",(0,s.jsx)(n.strong,{children:"DeepSeek-V3"}),". Like any good reasoning model, it starts with a strong base model, and DeepSeek-V3 is exactly that. This ",(0,s.jsx)(n.strong,{children:"671B Mixture of Experts (MoE)"})," model performs on par with heavyweights like ",(0,s.jsx)(n.strong,{children:"Sonnet 3.5 and GPT-4o"}),". What\u2019s especially impressive is how cost-efficient it was to train\u2014just ",(0,s.jsx)(n.strong,{children:"$5.5M"}),"\u2014thanks to architectural changes like:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Multi Token Prediction (MTP)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Multi-Head Latent Attention (MLA)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"A LOT of hardware optimization"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["DeepSeek also introduced two models: ",(0,s.jsx)(n.strong,{children:"DeepSeek-R1-Zero"})," and ",(0,s.jsx)(n.strong,{children:"DeepSeek-R1"}),", each with a distinct training approach."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DeepSeek-R1-Zero"})," skipped supervised fine-tuning altogether and relied entirely on reinforcement learning (RL), using ",(0,s.jsx)(n.strong,{children:"Group Relative Policy Optimization (GRPO)"})," to make the process more efficient. A simple reward system guided the model, providing feedback based on the accuracy and structure of its answers. This approach helped the model develop useful reasoning skills, such as breaking problems into steps and verifying its own outputs. However, its responses often lacked clarity and were difficult to read."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DeepSeek-R1"})," improved upon this by starting with a ",(0,s.jsx)(n.strong,{children:'"cold start" phase'}),", fine-tuning on a small set of carefully crafted examples to enhance clarity and readability. From there, it underwent additional RL and refinement steps, including ",(0,s.jsx)(n.strong,{children:"rejecting low-quality outputs using human preference-based and verifiable rewards"}),". This resulted in a model that not only reasons well but also produces polished and consistent answers."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DeepSeek Training Process",src:i(6657).A+"",width:"3412",height:"1694"})}),"\n",(0,s.jsx)(n.h2,{id:"open-r1-the-missing-pieces",children:"Open-R1: The Missing Pieces"}),"\n",(0,s.jsxs)(n.p,{children:["The release of DeepSeek-R1 is an amazing boon for the community, but they didn\u2019t release everything\u2014although the model weights are open, the ",(0,s.jsx)(n.strong,{children:"datasets and training code"})," are not \ud83d\ude22."]}),"\n",(0,s.jsxs)(n.p,{children:["The goal of ",(0,s.jsx)(n.strong,{children:"Open-R1"})," is to build these last missing pieces so that the whole research and industry community can build similar or better models using these recipes and datasets. And by doing this in the open, ",(0,s.jsx)(n.strong,{children:"everybody in the community can contribute!"})]}),"\n",(0,s.jsx)(n.p,{children:"As shown in the figure below, here\u2019s our plan of attack:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Replicate the R1-Distill models"})," by distilling a high-quality reasoning dataset from DeepSeek-R1."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Replicate the pure RL pipeline"})," that DeepSeek used to create R1-Zero. This will involve curating new, large-scale datasets for math, reasoning, and code."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Show we can go from base model \u2192 SFT \u2192 RL"})," via multi-stage training."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Open-R1 Plan",src:i(7674).A+"",width:"944",height:"1060"})}),"\n",(0,s.jsx)(n.h2,{id:"get-involved",children:"Get Involved"}),"\n",(0,s.jsx)(n.p,{children:"The synthetic datasets will allow everyone to fine-tune existing or new LLMs into reasoning models by simply fine-tuning on them. The training recipes involving RL will serve as a starting point for anyone to build similar models from scratch and will allow researchers to build even more advanced methods on top."}),"\n",(0,s.jsxs)(n.p,{children:["We ",(0,s.jsx)(n.strong,{children:"don\u2019t want to stop at math datasets"}),". There\u2019s a lot of potential in exploring other areas, obvious ones like ",(0,s.jsx)(n.strong,{children:"code"}),", but also ",(0,s.jsx)(n.strong,{children:"scientific fields such as medicine"}),", where reasoning models could have a significant impact."]}),"\n",(0,s.jsxs)(n.p,{children:["This initiative isn\u2019t just about replicating results\u2014it\u2019s about ",(0,s.jsx)(n.strong,{children:"sharing insights with the community"}),". By documenting what works, what doesn\u2019t, and why, we hope to save others from wasting time and compute on unproductive paths."]}),"\n",(0,s.jsx)(n.p,{children:"If this sounds interesting, we\u2019d love your help! Whether it\u2019s contributing code, joining discussions on Hugging Face, or sharing feedback, there are plenty of ways to get involved."}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s build this together! \ud83d\ude80"})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6657:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-1-f0b7c61ca3b2ef29a6ca54fc86eb379d.png"},7674:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-2-75167e81225a0fa432aa6e48f85a10ef.png"},215:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/image-d583a71c0fca94e85e547e87722d6c74.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}},4410:e=>{e.exports=JSON.parse('{"permalink":"/blog/deepseek-r1-and-its-impact-on-reasoning-models","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2025-01-29-What-is-DeepSeek-11.md","source":"@site/blog/2025-01-29-What-is-DeepSeek-11.md","title":"Revolutionizing Reasoning Models with Reinforcement Learning","description":"If you\u2019ve ever struggled with a tough math problem, you know how useful it is to think a little longer and work through it carefully. OpenAI\u2019s o1 model showed that when LLMs are trained to do the same\u2014by using more compute during inference\u2014they get significantly better at solving reasoning tasks like mathematics, coding, and logic.","date":"2025-01-29T00:00:00.000Z","tags":[{"inline":false,"label":"AI","permalink":"/blog/tags/AI","description":"AI tag description"},{"inline":true,"label":"deep learning","permalink":"/blog/tags/deep-learning"},{"inline":true,"label":"reinforcement learning","permalink":"/blog/tags/reinforcement-learning"},{"inline":true,"label":"reasoning models","permalink":"/blog/tags/reasoning-models"}],"readingTime":4.175,"hasTruncateMarker":true,"authors":[{"name":"Saim","title":"AI Engineer","url":"https://example.com","page":{"permalink":"/blog/authors/siam"},"socials":{"x":"https://x.com/saim_ki_tweets","linkedin":"https://www.linkedin.com/in/muhammad-saim-81441b229/","github":"https://github.com/codecsaim","newsletter":"https://https://example.com"},"imageURL":"https://github.com/slorber.png","key":"saim"}],"frontMatter":{"slug":"deepseek-r1-and-its-impact-on-reasoning-models","title":"Revolutionizing Reasoning Models with Reinforcement Learning","authors":"saim","tags":["AI","deep learning","reinforcement learning","reasoning models"]},"unlisted":false,"prevItem":{"title":"What is DeepSeek-R1?","permalink":"/blog/what-is-deepseek-r1"},"nextItem":{"title":"From Data Scientist to AI Developer: Lessons Building a Generative AI Web App in 2023","permalink":"/blog/from-data-scientist-to-ai-developer"}}')}}]);