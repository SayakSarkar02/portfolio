import react from '@public/assets/techstacks/react.png'
import html from '@public/assets/techstacks/html.png'
import css from '@public/assets/techstacks/css.png'
import js from '@public/assets/techstacks/javascript.png'
import nextjs from '@public/assets/techstacks/nextjs.png'
import mui from '@public/assets/techstacks/materialui.png'
import tailwind from '@public/assets/techstacks/tailwind.png'
import reactrouter from '@public/assets/techstacks/reactrouter.png'
import redux from '@public/assets/techstacks/redux.png'
import firebase from '@public/assets/techstacks/firebase.png'
import mongo from '@public/assets/techstacks/mongo.png'
import node from '@public/assets/techstacks/node.png'
import express from '@public/assets/techstacks/express.png'
import bootstrap from '@public/assets/techstacks/bootstrap.png'
import typescript from '@public/assets/techstacks/typescript.png'
import c from '@public/assets/techstacks/c.png'
import csharp from '@public/assets/techstacks/csharp.png'
import cpp from '@public/assets/techstacks/c++.png'
import java from '@public/assets/techstacks/java.png'
import python from '@public/assets/techstacks/python.png'
import Image from 'next/image'

const Card = ({title, img}) =>{
  return (
    <div className="bg-vs-white-2/10 p-2 rounded-lg w-28 flex flex-col max-sm:flex-row max-sm:w-full items-center transform transition-all duration-400 hover:scale-110 hover:bg-vs-white-2/20 hover:text-white">
        <div className="sm:w-20 sm:h-20 max-sm:w-12 max-sm:h-10 rounded-md overflow-clip flex items-center justify-center">
          <Image src={img} alt="react" className="w-full h-full object-contain max-sm:w-[60%]" />
        </div>
        <h3 className="mt-2 max-sm:mt-0 text-center">{title}</h3>
    </div>
  )
}

const TechStacks = () => {
  return (<>
    <div className="sm:p-5">
      <h3 className="text-3xl text-vs-yellow">Tech Stacks</h3>

      <h3 className="text-xl text-vs-blue-2 mt-10 mb-4">[ <span className="text-vs-white-1">Languages</span> ]</h3>
      <div className="flex flex-row flex-wrap gap-4">
        <Card title="Python" img={python}/>
        <Card title="Java" img={java}/>
        <Card title="C++" img={cpp}/>
        <Card title="C" img={c}/>
        <Card title="C#" img={csharp}/>
      </div>

      <h3 className="text-xl text-vs-blue-2 mt-10 mb-4">[ <span className="text-vs-white-1">Frontend</span> ]</h3>
      <div className="flex flex-row flex-wrap gap-4">
        <Card title="React" img={react}/>
        <Card title="HTML" img={html}/>
        <Card title="CSS" img={css}/>
        <Card title="JavaScript" img={js}/>
        <Card title="MaterialUI" img={mui}/>
        <Card title="NextJS" img={nextjs}/>
        <Card title="Tailwind" img={tailwind}/>
        <Card title="Bootstrap" img={bootstrap}/>
        <Card title="ReactRouter" img={reactrouter}/>
        <Card title="Redux" img={redux}/>
      </div>

      <h3 className="text-xl text-vs-blue-2 mt-10 mb-4">[ <span className="text-vs-white-1">Backend</span> ]</h3>
      <div className="flex flex-row flex-wrap gap-4">
        <Card title="Express" img={express}/>
        <Card title="NodeJS" img={node}/>
      </div>

      <h3 className="text-xl text-vs-blue-2 mt-10 mb-4">[ <span className="text-vs-white-1">Database</span> ]</h3>
      <div className="flex flex-row flex-wrap gap-4">
        <Card title="MongoDB" img={mongo}/>
      </div>
    </div>
    </>
  )
}

export default TechStacks
