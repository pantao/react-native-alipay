//
//  RCTAlipay.h
//  RCTAlipay
//
//  Created by 潘韬 on 2018/6/29.
//  Copyright © 2018年 pantao. All rights reserved.
//

#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import <UIKit/UIKit.h>
#import <AlipaySDK/AlipaySDK.h>

@interface RCTAlipay : NSObject <RCTBridgeModule>

@end
