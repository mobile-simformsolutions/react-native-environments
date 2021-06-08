//
//  RNConfig.m
//  myApp
//
//  Created by Chetan Godiya on 10/05/21.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env=@"dev";
#elif DEBUG
  NSString *env=@"staging";
#else
  NSString *env=@"prod";
#endif
  return @{ @"env":env};
}
+ (BOOL)requireMainQueueSetup
{
  return YES;
}
@end
