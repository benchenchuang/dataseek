import { siteConfig } from '@/config/site'
import { Image } from '@nextui-org/react'
import React from 'react'

const AboutContent = () => {
    return (
        <div>
            <div className='max-w-[1200px] mx-auto flex flex-row my-[80px]'>
                <div className='flex-1 mr-[100px]'>
                    <p className='text-[#333] font-[600] text-[18px]'>苏州智奇胜软件科技有限公司成立于2013年，是一家全球性的软件解决方案公司，总部位于中国苏州。 我们提供技术咨询、软件项目管理、软件测试、软件开发、APP开发、小程序开发、物联网（IoT）开发、系统集成和商业软件解决方案开发。</p>
                    <h3 className='text-site-primary font-[600] mt-6 text-[16px]'>我们的实力</h3>
                    <p className='text-[#666] text-[14px] mt-2'>与我们合作有2大优势： 1.科学的项目管理和高效的开发协作； 2.我们提供行业领先的解决方案，我们会认真倾听您的痛点问题，能够针对具体问题提出相对应的解决方案，并提供一站式的开发服务。</p>
                    <h3 className='text-site-primary font-[600] mt-6 text-[16px]'>技术语言</h3>
                    <p className='text-[#666] text-[14px] mt-2'>我们的团队擅长各种主流前后端技术栈及开发语言及移动端的原生APP开发，Android 支持Java、Kotlin，iOS支持Objective-C、Swift；服务端及Web前端语言包括但不限于 Java、PHP、.Net (C#)、C++、C、ColdFusion、Ruby 、Python、Vue.js、JavaScript和 Solidity。我们的技术团队可以从容应对各种技术难题，有实力为每个客户提供量身定制的解决方案及提供相应的开发服务。</p>
                    <h3 className='text-site-primary font-[600] mt-6 text-[16px]'>专业领域</h3>
                    <p className='text-[#666] text-[14px] mt-2'>我们的核心服务包括解决方案设计、APP开发，包括Android、iOS 原生应用程序及混合开发、小程序开发、Web 开发及出色的UI/UX艺术设计。</p>
                    <h3 className='text-site-primary font-[600] mt-6 text-[16px]'>行业解决方案</h3>
                    <p className='text-[#666] text-[14px] mt-2'>我们已成功为各个行业提供成熟的解决方案，物联网、包括制造、医疗保健和教育。我们了解每个行业面临的独特挑战，并定制我们的服务以满足客户的特定需求。</p>
                    <h3 className='text-site-primary font-[600] mt-6 text-[16px]'>我们的承诺</h3>
                    <p className='text-[#666] text-[14px] mt-2'>我们致力于了解客户的问题、痛点、需求，并共同努力将想法转化为现实。我们的专业团队已准备好着手您的下一个软件项目,并帮助您实现业务目标。</p>
                </div>
                <Image radius='none' src='https://sz-source.chisalsoft.co/website2023/web/pro/aboutus/pic_right.png' alt={siteConfig.name}/>
            </div>
        </div>
    )
}

export default AboutContent