import React from "react";
import { NativeModules, requireNativeComponent, Platform } from "react-native";

const { AppleSignIn } = NativeModules;

export const RNSignInWithAppleWhiteButton = requireNativeComponent(
  "RNCSignInWithAppleButtonWhite"
);

export const RNSignInWithAppleWhiteOutlineButton = requireNativeComponent(
  "RNCSignInWithAppleButtonWhiteOutline"
);

export const RNSignInWithAppleBlackButton = requireNativeComponent(
  "RNCSignInWithAppleButtonBlack"
);

const majorVersionIOS = parseInt(Platform.Version, 10);

const IS_SUPPORTED = Platform.OS === "ios" && majorVersionIOS >= 13;

const onLoginPress = (onResult, onError) => async () => {
  await AppleSignIn.requestAsync({
    requestedScopes: [AppleSignIn.Scope.FULL_NAME, AppleSignIn.Scope.EMAIL]
  }).then(onResult, onError);
};

export const SignInWithAppleWhiteButton = ({
  style,
  cornerRadius,
  onResult,
  onError
}) => {
  if (IS_SUPPORTED) {
    return (
      <RCSignInWithAppleWhiteButton
        style={style}
        cornerRadius={cornerRadius}
        onPress={onLoginPress(onResult, onError)}
      />
    );
  }

  return null;
};

export const SignInWithAppleWhiteOutlineButton = ({
  style,
  cornerRadius,
  onResult,
  onError
}) => {
  if (IS_SUPPORTED) {
    return (
      <RCSignInWithAppleWhiteOutlineButton
        style={style}
        cornerRadius={cornerRadius}
        onPress={onLoginPress(onResult, onError)}
      />
    );
  }

  return null;
};

export const SignInWithAppleBlackButton = ({
  style,
  cornerRadius,
  onResult,
  onError
}) => {
  if (IS_SUPPORTED) {
    return (
      <RCSignInWithAppleBlackButton
        style={style}
        cornerRadius={cornerRadius}
        onPress={onLoginPress(onResult, onError)}
      />
    );
  }

  return null;
};

export const Scope = {
  FULL_NAME: IS_SUPPORTED ? AppleSignIn.Scope.FULL_NAME : null,
  EMAIL: IS_SUPPORTED ? AppleSignIn.Scope.EMAIL : null
};

export const Operation = {
  LOGIN: IS_SUPPORTED ? AppleSignIn.Operation.LOGIN : null,
  REFRESH: IS_SUPPORTED ? AppleSignIn.Operation.REFRESH : null,
  LOGOUT: IS_SUPPORTED ? AppleSignIn.Operation.LOGOUT : null,
  IMPLICIT: IS_SUPPORTED ? AppleSignIn.Operation.IMPLICIT : null
};

export const CredentialState = {
  AUTHORIZED: IS_SUPPORTED ? AppleSignIn.CredentialState.AUTHORIZED : null,
  REVOKED: IS_SUPPORTED ? AppleSignIn.CredentialState.REVOKED : null,
  NOT_FOUND: IS_SUPPORTED ? AppleSignIn.CredentialState.NOT_FOUND : null
};

export const UserDetectionStatus = {
  LIKELY_REAL: IS_SUPPORTED
    ? AppleSignIn.UserDetectionStatus.LIKELY_REAL
    : null,
  UNKNOWN: IS_SUPPORTED ? AppleSignIn.UserDetectionStatus.UNKNOWN : null,
  UNSUPPORTED: IS_SUPPORTED ? AppleSignIn.UserDetectionStatus.UNSUPPORTED : null
};

export default {
  request: IS_SUPPORTED ? AppleSignIn.requestAsync : null,
  getCredentialState: IS_SUPPORTED ? AppleSignIn.getCredentialStateAsync : null
};
