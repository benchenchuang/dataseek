import React from 'react'
import { siteConfig } from '@/config/site'
import { Image } from '@nextui-org/react'

const AboutUs = () => {
    return (
        <div className='relative'>
            <div className='max-w-[1200px] flex flex-row my-[80px] mx-auto gap-[100px]'>
                <div>
                    <Image alt={siteConfig.name} src="https://sz-source.chisalsoft.co/website2023/web/chisasoft/unit_bg_0.png"/>
                </div>
                <div className='w-[600px]'>
                    <h2 className='wow fadeInRight text-[#333] font-[600] text-[36px]'>关于数琛科技</h2>
                    <div className='text-[#666] text-[16px] leading-7'>
                        <p className='my-[20px]'>苏州智奇胜软件科技有限公司成立于2013年，是一家全球性的软件解决方案公司，总部位于中国苏州。我们专注于软件项目管理、技术咨询、软件测试、软件开发、物联网开发、APP开发、小程序开发、系统集成以及商业软件解决方案开发。</p>
                        <p className='my-[20px]'>苏州智奇胜软件科技有限公司成立于2013年，是一家全球性的软件解决方案公司，总部位于中国苏州。我们专注于软件项目管理、技术咨询、软件测试、软件开发、物联网开发、APP开发、小程序开发、系统集成以及商业软件解决方案开发。</p>
                        <p className='my-[20px]'>苏州智奇胜软件科技有限公司成立于2013年，是一家全球性的软件解决方案公司，总部位于中国苏州。我们专注于软件项目管理、技术咨询、软件测试、软件开发、物联网开发、APP开发、小程序开发、系统集成以及商业软件解决方案开发。</p>
                    </div>
                </div>
            </div>
            <div className='max-w-[1200px] flex flex-row my-[80px] mx-auto gap-[100px]'>
                <div className='w-[600px]'>
                    <h2 className='wow fadeInLeft text-[#333] font-[600] text-[36px]'>科学的项目管理、高效的开发协作、快速高质量交付项目</h2>
                    <div className='text-[#666] text-[16px] leading-7'>
                        <p className='my-[20px]'>智奇胜拥有一支超过10年经验的开发团队，所有项目经理均通过PMP认证，公司有标准的开发流程，在整个项目开发生命周期内，通过自研的BugX管理软件，各部门、各技术角色开发协作配合默契，项目输出实时透明从而大大提升了开发效率，为客户降低开发成本。</p>
                    </div>
                </div>
                <div>
                    <Image alt={siteConfig.name} src="https://sz-source.chisalsoft.co/website2023/web/chisasoft/unit_bg_0.png"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs