/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-11 11:38:01
 * @LastEditTime: 2024-02-11 12:49:53
 * @FilePath: /dataseek-website/src/app/(pages)/cooperate/_components/ways.tsx
 */
import BlockHeader from '@/components/BlockHeader'
import { siteConfig } from '@/config/site'
import { Image } from '@nextui-org/react'
import React from 'react'

const CooperateWays = () => {
    const header = {
        title: '合作方式',
        en_title: 'Cooperation modes'
    }

    const modes = [
        {
            title: '项目整包',
            description: '我们为您项目提供一支专业的解决方案设计、开发、交付团队，直至项目上线，完美交付。',
            image: 'https://sz-source.chisalsoft.co/website2023/web/chisasoft/Project-Outsourcing_0.png',
            content: [
                '产品规格和 UI/UX 设计',
                '后端架构和技术规范设计',
                '开发与实施',
                '测试（测试用例将在开发阶段创建）',
                '项目交付、部署和发布',
            ]
        },
        {
            title: '人力外包',
            description: '我们会根据您的业务需要，为您提供相应的项目经理、UI/UE设计师、各角色的开发工程师，每日的开发任务由您自行安排。',
            image: 'https://sz-source.chisalsoft.co/website2023/web/chisasoft/Labor-Outsourcing_0.png',
            content: [
                '工作估算和项目规划',
                '为项目找到合适的人才并建立最好的团队',
                '每日同步和反馈收集',
                '业务验证及交付',
            ]
        },
        {
            title: '协助您打造一支专业的软件开发团队',
            description: '彻底解决您自行组建团队所遇到的因新团队而产生的协同开发效率低下、团队成员不稳定、技术杂乱磨合时间久等一系列不稳定因素及成本高的问题。',
            image: 'https://sz-source.chisalsoft.co/website2023/web/chisasoft/Build-Team_0.png',
            content: [
                '目标设定',
                '定义角色职责和资格',
                '设计招聘策略和计划',
                '设计培训计划',
                '组建团队协作开发一定的周期',
                '团队全方位考核优秀移交客户',
            ]
        }
    ]

    return (
        <div className='py-[80px]'>
            <BlockHeader {...header} />
            <div className='max-w-[1200px] mx-auto flex flex-col'>
                {
                    modes.map((mode, key) => {
                        return <div className={`flex flex-row ${key%2?'flex-row-reverse':''} my-[60px] gap-[120px]`} key={key}>
                            <div>
                                <h3 className='wow fadeInUp text-[#333] font-[600] text-[30px]'>{mode.title}</h3>
                                <h4 className='wow bounceIn text-[#666] text-[18px] my-[30px]'>{mode.description}</h4>
                                <div>
                                    {
                                        mode.content.map((content,index)=>{
                                            return <p className='wow fadeInUp text-[#333] text-[16px] leading-8' key={index}>
                                                <span className='mr-3'>{index+1}</span>
                                                <span>{content}</span>
                                            </p>
                                        })
                                    }
                                </div>
                            </div>
                            <Image src={mode.image} alt={siteConfig.name} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CooperateWays