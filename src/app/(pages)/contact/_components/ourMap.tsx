/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-11 17:36:33
 * @LastEditTime: 2024-02-11 17:53:49
 * @FilePath: /dataseek-website/src/app/(pages)/contact/_components/ourMap.tsx
 */
'use client';
import React from 'react'
import { mapKey, siteConfig } from '@/config/site';
import { Map, APILoader, Marker } from '@uiw/react-amap';

const OurMap = () => {
    return (
        <div>
            <div style={{ width: '100%', height: '400px' }}>
                <APILoader akey={mapKey}>
                    <Map zoom={15} center={[119.991907, 31.813060]} mapStyle="amap://styles/whitesmoke">
                        <Marker
                            title={siteConfig.name}
                            offset={[-13, -30]}
                            position={[119.991907, 31.810190]}>
                        </Marker>
                    </Map>
                </APILoader>
            </div>
        </div>
    )
}

export default OurMap