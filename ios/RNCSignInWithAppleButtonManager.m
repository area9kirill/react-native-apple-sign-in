#import <React/RCTViewManager.h>
#import <React/RCTUtils.h>
#import "RNCSignInWithAppleButton.h"
@import AuthenticationServices;

#define EX_REGISTER_APPLE_AUTH_VIEW_MANAGER(style) \
@interface RNCSignInWithAppleButton ## style ## Manager : RCTViewManager @end \
\
@implementation RNCSignInWithAppleButton ## style ## Manager \
\
  RCT_EXPORT_MODULE(RNCSignInWithAppleButton ## style ## Manager) \
\ 
  RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock) \
\ 
  RCT_CUSTOM_VIEW_PROPERTY(cornerRadius, NSNumber *, RNCSignInWithAppleButton) { if (@available(iOS 13.0, *)) { view.cornerRadius = [json floatValue]; } } \
\ 
- (UIView *)view { if (@available(iOS 13.0, *)) { return [[RNCSignInWithAppleButton alloc] initWithAuthorizationButtonType:ASAuthorizationAppleIDButtonTypeDefault authorizationButtonStyle:ASAuthorizationAppleIDButtonStyle ## style]; } return nil; } \
\
@end

# pragma mark - SignIn White

EX_REGISTER_APPLE_AUTH_VIEW_MANAGER(White)

# pragma mark - SignIn WhiteOutline

EX_REGISTER_APPLE_AUTH_VIEW_MANAGER(WhiteOutline)

# pragma mark - SignIn Black

EX_REGISTER_APPLE_AUTH_VIEW_MANAGER(Black)

// original code
// @interface RNCSignInWithAppleButtonManager : RCTViewManager
// @end

// @implementation RNCSignInWithAppleButtonManager

// RCT_EXPORT_MODULE(RNCSignInWithAppleButtonManager)

// RCT_EXPORT_VIEW_PROPERTY(onPress, RCTBubblingEventBlock)
// RCT_EXPORT_VIEW_PROPERTY(type, NSInteger)

// - (UIView *)view
// {
//     if (@available(iOS 13.0, *)) {
//         NSInteger *type = self.type ? self.type : ASAuthorizationAppleIDButtonStyleBlack;
//         return [[RNCSignInWithAppleButton alloc] initWithAuthorizationButtonType:ASAuthorizationAppleIDButtonTypeDefault authorizationButtonStyle:type];
//     }
//     return nil;
// }

// @end
