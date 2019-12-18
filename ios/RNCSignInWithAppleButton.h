#import <React/RCTComponent.h>
@import AuthenticationServices;

API_AVAILABLE(ios(13.0))
@interface RNCSignInWithAppleButton : ASAuthorizationAppleIDButton

@property (nonatomic, copy) RCTBubblingEventBlock onPress;
@property (nonatomic, copy) NSInteger *type;

@end
