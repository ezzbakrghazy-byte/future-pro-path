
> vite_react_shadcn_ts@0.0.0 test:run
> vitest run


[1m[46m RUN [49m[22m [36mv4.0.15 [39m[90mC:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path[39m

ReferenceError: isAuthenticated is not defined
    at useAuth (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/test/components/ProtectedRoute.test.tsx:14:13)
    at ProtectedRoute (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/ProtectedRoute.tsx:10:29)
    at renderWithHooks (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:15486:18)
    at mountIndeterminateComponent (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:20103:13)
    at beginWork (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:21626:16)
    at HTMLUnknownElement.callCallback (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:4164:14)
    at HTMLUnknownElement.callTheUserObjectsOperation (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
    at innerInvokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:360:16)
    at invokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:296:3)
    at HTMLUnknownElementImpl._dispatch (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:243:9)
ReferenceError: isAuthenticated is not defined
    at useAuth (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/test/components/ProtectedRoute.test.tsx:14:13)
    at ProtectedRoute (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/ProtectedRoute.tsx:10:29)
    at renderWithHooks (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:15486:18)
    at mountIndeterminateComponent (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:20103:13)
    at beginWork (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:21626:16)
    at HTMLUnknownElement.callCallback (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:4164:14)
    at HTMLUnknownElement.callTheUserObjectsOperation (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
    at innerInvokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:360:16)
    at invokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:296:3)
    at HTMLUnknownElementImpl._dispatch (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:243:9)
stderr | src/test/components/ProtectedRoute.test.tsx > ProtectedRoute Component > redirects to sign in when not authenticated
The above error occurred in the <ProtectedRoute> component:

    at ProtectedRoute (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/ProtectedRoute.tsx:10:27)
    at RenderedRoute (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:539:7)
    at Routes (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1273:7)
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/test/components/ProtectedRoute.test.tsx:3:22)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

ReferenceError: isAuthenticated is not defined
    at useAuth (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/test/components/ProtectedRoute.test.tsx:14:13)
    at ProtectedRoute (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/ProtectedRoute.tsx:10:29)
    at renderWithHooks (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:15486:18)
    at mountIndeterminateComponent (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:20103:13)
    at beginWork (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:21626:16)
    at HTMLUnknownElement.callCallback (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:4164:14)
    at HTMLUnknownElement.callTheUserObjectsOperation (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
    at innerInvokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:360:16)
    at invokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:296:3)
    at HTMLUnknownElementImpl._dispatch (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:243:9)
ReferenceError: isAuthenticated is not defined
    at useAuth (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/test/components/ProtectedRoute.test.tsx:14:13)
    at ProtectedRoute (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/ProtectedRoute.tsx:10:29)
    at renderWithHooks (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:15486:18)
    at mountIndeterminateComponent (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:20103:13)
    at beginWork (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:21626:16)
    at HTMLUnknownElement.callCallback (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-dom\cjs\react-dom.development.js:4164:14)
    at HTMLUnknownElement.callTheUserObjectsOperation (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\generated\EventListener.js:26:30)
    at innerInvokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:360:16)
    at invokeEventListeners (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:296:3)
    at HTMLUnknownElementImpl._dispatch (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\jsdom\lib\jsdom\living\events\EventTarget-impl.js:243:9)
stderr | src/test/components/ProtectedRoute.test.tsx > ProtectedRoute Component > renders children when authenticated
The above error occurred in the <ProtectedRoute> component:

    at ProtectedRoute (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/ProtectedRoute.tsx:10:27)
    at RenderedRoute (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:539:7)
    at Routes (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1273:7)
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/test/components/ProtectedRoute.test.tsx:3:22)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

 [31mΓ¥»[39m src/test/components/ProtectedRoute.test.tsx [2m([22m[2m2 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[32m 65[2mms[22m[39m
[31m     [31m├ù[31m redirects to sign in when not authenticated[39m[32m 55[2mms[22m[39m
[31m     [31m├ù[31m renders children when authenticated[39m[32m 7[2mms[22m[39m
stderr | src/test/pages/SignUp.test.tsx > SignUp Component > renders sign up form
ΓÜá∩╕Å React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
ΓÜá∩╕Å React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.

stderr | src/test/pages/SignIn.test.tsx > SignIn Component > renders sign in form
ΓÜá∩╕Å React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
ΓÜá∩╕Å React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.

 [32mΓ£ô[39m src/test/components/VideoAnalysisResults.test.tsx [2m([22m[2m2 tests[22m[2m)[22m[33m 330[2mms[22m[39m
stderr | fetchAnalysis (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\src\components\VideoAnalysisResults.tsx:102:17)
Error fetching analysis: TypeError: fetch failed
    at node:internal/deps/undici/undici:13502:13
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
    at fetchLatestVideo (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/VideoAnalysisResults.tsx:59:20)
    at fetchAnalysis (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/VideoAnalysisResults.tsx:96:64) {
  [cause]: Error: getaddrinfo ENOTFOUND test.supabase.co
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'test.supabase.co'
  }
}

stderr | src/test/components/Navigation.test.tsx > Navigation Component > renders navigation bar
ΓÜá∩╕Å React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
ΓÜá∩╕Å React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

stderr | src/test/components/Navigation.test.tsx > Navigation Component > displays navigation links
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

stderr | fetchAnalysis (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\src\components\VideoAnalysisResults.tsx:102:17)
Error fetching analysis: TypeError: fetch failed
    at node:internal/deps/undici/undici:13502:13
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
    at fetchVideoById (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/VideoAnalysisResults.tsx:74:20)
    at fetchAnalysis (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/VideoAnalysisResults.tsx:96:32) {
  [cause]: Error: getaddrinfo ENOTFOUND test.supabase.co
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:120:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'test.supabase.co'
  }
}

stderr | src/test/components/Navigation.test.tsx > Navigation Component > has correct link hrefs
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

stderr | src/test/components/Navigation.test.tsx > Navigation Component > shows sign in button when not authenticated
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

stderr | src/test/components/Navigation.test.tsx > Navigation Component > shows sign up button when not authenticated
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

stderr | src/test/integration/VideoAnalysisFlow.test.tsx > Video Analysis Full Flow Integration Test > completes full video analysis workflow
ΓÜá∩╕Å React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
ΓÜá∩╕Å React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

 [31mΓ¥»[39m src/test/integration/VideoAnalysisFlow.test.tsx [2m([22m[2m1 test[22m[2m | [22m[31m1 failed[39m[2m)[22m[33m 414[2mms[22m[39m
[31m     [31m├ù[31m completes full video analysis workflow[39m[33m 410[2mms[22m[39m
stderr | src/test/components/Navigation.test.tsx > Navigation Component > is responsive on mobile
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

 [31mΓ¥»[39m src/test/pages/SignIn.test.tsx [2m([22m[2m7 tests[22m[2m | [22m[31m5 failed[39m[2m)[22m[33m 1256[2mms[22m[39m
[31m     [31m├ù[31m renders sign in form[39m[32m 171[2mms[22m[39m
     [33m[2mΓ£ô[22m[39m shows validation errors for empty fields [33m 735[2mms[22m[39m
[31m     [31m├ù[31m successfully signs in with valid credentials[39m[32m 33[2mms[22m[39m
[31m     [31m├ù[31m displays error message on sign in failure[39m[32m 28[2mms[22m[39m
[31m     [31m├ù[31m shows loading state during sign in[39m[32m 33[2mms[22m[39m
[31m     [31m├ù[31m has link to sign up page[39m[32m 35[2mms[22m[39m
     [32mΓ£ô[39m has back to home button[32m 214[2mms[22m[39m
stderr | src/test/components/Navigation.test.tsx > Navigation Component > toggles mobile menu when menu button clicked
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at MemoryRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1101:7)

 [31mΓ¥»[39m src/test/components/Navigation.test.tsx [2m([22m[2m7 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[33m 885[2mms[22m[39m
     [32mΓ£ô[39m renders navigation bar[32m 152[2mms[22m[39m
     [32mΓ£ô[39m displays navigation links[32m 18[2mms[22m[39m
[31m     [31m├ù[31m has correct link hrefs[39m[32m 25[2mms[22m[39m
     [33m[2mΓ£ô[22m[39m shows sign in button when not authenticated [33m 398[2mms[22m[39m
     [32mΓ£ô[39m shows sign up button when not authenticated[32m 10[2mms[22m[39m
     [32mΓ£ô[39m is responsive on mobile[32m 148[2mms[22m[39m
[31m     [31m├ù[31m toggles mobile menu when menu button clicked[39m[32m 130[2mms[22m[39m
stderr | src/test/integration/App.test.tsx > App Integration Tests > renders homepage by default
ΓÜá∩╕Å React Router Future Flag Warning: React Router will begin wrapping state updates in `React.startTransition` in v7. You can use the `v7_startTransition` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_starttransition.
ΓÜá∩╕Å React Router Future Flag Warning: Relative route resolution within Splat routes is changing in v7. You can use the `v7_relativeSplatPath` future flag to opt-in early. For more information, see https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath.
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at BrowserRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router-dom\dist\umd\react-router-dom.development.js:695:7)
    at Provider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@radix-ui/react-context/dist/index.mjs:27:15)
    at TooltipProvider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@radix-ui/react-tooltip/dist/index.mjs:29:5)
    at QueryClientProvider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js:20:3)
    at App

stderr | src/test/components/ScoutingReport.test.tsx > ScoutingReport Component > displays error message on report generation failure
Scouting report error: Error: Failed to generate report
    at generateReport (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/components/ScoutingReport.tsx:35:15)

stderr | src/test/integration/App.test.tsx > App Integration Tests > has navigation component
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at BrowserRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router-dom\dist\umd\react-router-dom.development.js:695:7)
    at Provider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@radix-ui/react-context/dist/index.mjs:27:15)
    at TooltipProvider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@radix-ui/react-tooltip/dist/index.mjs:29:5)
    at QueryClientProvider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js:20:3)
    at App

stderr | src/test/integration/App.test.tsx > App Integration Tests > has all main routes configured
Warning: An update to AuthProvider inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
    at AuthProvider (C:/Users/Abdelrahman Bakr/Desktop/me/fi dahrk/code/future-pro-path/src/contexts/AuthContext.tsx:25:25)
    at Router (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router\dist\umd\react-router.development.js:1207:17)
    at BrowserRouter (C:\Users\Abdelrahman Bakr\Desktop\me\fi dahrk\code\future-pro-path\node_modules\react-router-dom\dist\umd\react-router-dom.development.js:695:7)
    at Provider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@radix-ui/react-context/dist/index.mjs:27:15)
    at TooltipProvider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@radix-ui/react-tooltip/dist/index.mjs:29:5)
    at QueryClientProvider (file:///C:/Users/Abdelrahman%20Bakr/Desktop/me/fi%20dahrk/code/future-pro-path/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js:20:3)
    at App

 [31mΓ¥»[39m src/test/integration/App.test.tsx [2m([22m[2m4 tests[22m[2m | [22m[31m2 failed[39m[2m)[22m[33m 837[2mms[22m[39m
     [33m[2mΓ£ô[22m[39m renders homepage by default [33m 544[2mms[22m[39m
[31m     [31m├ù[31m has navigation component[39m[32m 153[2mms[22m[39m
     [32mΓ£ô[39m wraps app in AuthProvider[32m 76[2mms[22m[39m
[31m     [31m├ù[31m has all main routes configured[39m[32m 59[2mms[22m[39m
 [31mΓ¥»[39m src/test/pages/SignUp.test.tsx [2m([22m[2m9 tests[22m[2m | [22m[31m8 failed[39m[2m)[22m[33m 2398[2mms[22m[39m
[31m     [31m├ù[31m renders sign up form[39m[32m 138[2mms[22m[39m
[31m     [31m├ù[31m shows validation errors for empty fields[39m[33m 2079[2mms[22m[39m
[31m     [31m├ù[31m shows validation error for invalid email[39m[32m 16[2mms[22m[39m
[31m     [31m├ù[31m shows validation error for short password[39m[32m 14[2mms[22m[39m
[31m     [31m├ù[31m successfully signs up with valid credentials[39m[32m 16[2mms[22m[39m
[31m     [31m├ù[31m displays error message on sign up failure[39m[32m 24[2mms[22m[39m
[31m     [31m├ù[31m shows loading state during sign up[39m[32m 13[2mms[22m[39m
[31m     [31m├ù[31m has link to sign in page[39m[32m 16[2mms[22m[39m
     [32mΓ£ô[39m has back to home button[32m 78[2mms[22m[39m
 [31mΓ¥»[39m src/test/components/ScoutingReport.test.tsx [2m([22m[2m6 tests[22m[2m | [22m[31m4 failed[39m[2m)[22m[33m 5308[2mms[22m[39m
     [33m[2mΓ£ô[22m[39m renders generate report button [33m 525[2mms[22m[39m
[31m     [31m├ù[31m successfully generates scouting report[39m[33m 1168[2mms[22m[39m
[31m     [31m├ù[31m displays error message on report generation failure[39m[33m 1192[2mms[22m[39m
     [32mΓ£ô[39m shows loading state during report generation[32m 83[2mms[22m[39m
[31m     [31m├ù[31m displays scout recommendations[39m[33m 1094[2mms[22m[39m
[31m     [31m├ù[31m allows downloading report as PDF[39m[33m 1240[2mms[22m[39m
 [31mΓ¥»[39m src/test/components/ClubMatching.test.tsx [2m([22m[2m8 tests[22m[2m | [22m[31m7 failed[39m[2m)[22m[33m 8582[2mms[22m[39m
     [33m[2mΓ£ô[22m[39m renders find clubs button [33m 587[2mms[22m[39m
[31m     [31m├ù[31m successfully finds matching clubs[39m[33m 1233[2mms[22m[39m
[31m     [31m├ù[31m displays club details[39m[33m 1167[2mms[22m[39m
[31m     [31m├ù[31m displays match reasons[39m[33m 1102[2mms[22m[39m
[31m     [31m├ù[31m displays error message on matching failure[39m[33m 1071[2mms[22m[39m
[31m     [31m├ù[31m shows loading state during matching[39m[33m 1188[2mms[22m[39m
[31m     [31m├ù[31m sorts clubs by match score[39m[33m 1131[2mms[22m[39m
[31m     [31m├ù[31m displays no results message when no matches found[39m[33m 1099[2mms[22m[39m
 [31mΓ¥»[39m src/test/components/VideoUpload.test.tsx [2m([22m[2m8 tests[22m[2m | [22m[31m7 failed[39m[2m)[22m[33m 9924[2mms[22m[39m
[31m     [31m├ù[31m renders video upload form[39m[32m 282[2mms[22m[39m
[31m     [31m├ù[31m accepts video file upload[39m[32m 136[2mms[22m[39m
     [33m[2mΓ£ô[22m[39m validates required fields before upload [33m 586[2mms[22m[39m
[31m     [31m├ù[31m successfully uploads video and triggers analysis[39m[32m 65[2mms[22m[39m
[31m     [31m├ù[31m displays error message on upload failure[39m[32m 64[2mms[22m[39m
[31m     [31m├ù[31m shows loading state during upload[39m[32m 71[2mms[22m[39m
[31m     [31m├ù[31m validates file type[39m[32m 124[2mms[22m[39m
[31m     [31m├ù[31m validates file size[39m[33m 8592[2mms[22m[39m
 [31mΓ¥»[39m src/test/components/AICoachChat.test.tsx [2m([22m[2m12 tests[22m[2m | [22m[31m10 failed[39m[2m)[22m[33m 15331[2mms[22m[39m
     [32mΓ£ô[39m renders chat interface[32m 214[2mms[22m[39m
     [32mΓ£ô[39m allows user to type message[32m 32[2mms[22m[39m
[31m     [31m├ù[31m sends message when button is clicked[39m[33m 1607[2mms[22m[39m
[31m     [31m├ù[31m sends message when Enter key is pressed[39m[33m 1067[2mms[22m[39m
[31m     [31m├ù[31m displays chat messages[39m[33m 2028[2mms[22m[39m
[31m     [31m├ù[31m clears input after sending message[39m[33m 2041[2mms[22m[39m
[31m     [31m├ù[31m displays error message on chat failure[39m[33m 1559[2mms[22m[39m
[31m     [31m├ù[31m shows loading state while waiting for response[39m[33m 1293[2mms[22m[39m
[31m     [31m├ù[31m disables input while sending message[39m[33m 1147[2mms[22m[39m
[31m     [31m├ù[31m prevents sending empty messages[39m[33m 1482[2mms[22m[39m
[31m     [31m├ù[31m maintains conversation history[39m[33m 1489[2mms[22m[39m
[31m     [31m├ù[31m handles streaming responses[39m[33m 1369[2mms[22m[39m

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ» Failed Tests 48 ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > sends message when button is clicked
AssertionError: expected "vi.fn()" to be called with arguments: [ 'sports-coach-chat', ΓÇª(1) ]

Number of calls: 0


Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
      >
        <div
          class="p-4 border-b border-border"
        >
          <h3
            class="text-lg font-semibold text-foreground mb-3"
          >
            AI Coach Assistant
          </h3>
          <div
            class="grid grid-cols-2 gap-2"
          >
            <button
              class="p-3 rounded-lg border transition-all text-left bg-primary/10 border-primary text-primary"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  />
                  <path
                    d="M14 2v4a2 2 0 0 0 2 2h4"
                  />
                  <path
                    d="M10 9H8"
                  />
                  <path
                    d="M16 13H8"
                  />
                  <path
                    d="M16 17H8"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Write Pitch
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Craft a message to clubs
                  </div>
                </div>
              </div>
            </button>
            <button
              class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Evaluate Potential
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Analyze your abilities
                  </div>
                </div>
              </div>
            </button>
            <button
              class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="22 7 13.5 15.5 8.5 10.5 2 17"
                  />
                  <polyline
                    points="16 7 22 7 22 13"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Get Tips
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Improve your game
                  </div>
                </div>
              </div>
            </button>
            <button
              class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Build Profile
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Strengthen your profile
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div
          class="relative overflow-hidden flex-1 p-4"
          dir="ltr"
          style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
        >
          <div
            class="h-full w-full rounded-[inherit]"
            data-radix-scroll-area-viewport=""
            style="overflow-x: hidden; overflow-y: scroll;"
          >
            <div
              style="min-width: 100%; display: table;"
            >
              <div
                class="flex items-center justify-center h-full text-center text-muted-foreground"
              >
                <div>
                  <svg
                    class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    />
                    <path
                      d="M9 18h6"
                    />
                    <path
                      d="M10 22h4"
                    />
                  </svg>
                  <p
                    class="text-sm"
                  >
                    Select a category above and ask me anything!
                  </p>
                  <p
                    class="text-xs mt-2"
                  >
                    I'm here to help you succeed.
                  </p>
                </div>
              </div>
              <div
                class="space-y-4"
              />
            </div>
          </div>
        </div>
        <div
          class="p-4 border-t border-border"
        >
          <div
            class="flex gap-2"
          >
            <textarea
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              placeholder="Ask me anything about your football career..."
              rows="2"
            >
              How do I improve passing?
            </textarea>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            >
              <svg
                class="lucide lucide-send h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                />
                <path
                  d="m21.854 2.147-10.94 10.939"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» src/test/components/AICoachChat.test.tsx:47:26
     45| 
     46|     await waitFor(() => {
     47|       expect(mockInvoke).toHaveBeenCalledWith('sports-coach-chat', {
       |                          ^
     48|         body: expect.objectContaining({
     49|           messages: expect.any(Array),
 Γ¥» runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
 Γ¥» checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
 Γ¥» Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[1/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > sends message when Enter key is pressed
AssertionError: expected "vi.fn()" to be called at least once

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
      >
        <div
          class="p-4 border-b border-border"
        >
          <h3
            class="text-lg font-semibold text-foreground mb-3"
          >
            AI Coach Assistant
          </h3>
          <div
            class="grid grid-cols-2 gap-2"
          >
            <button
              class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  />
                  <path
                    d="M14 2v4a2 2 0 0 0 2 2h4"
                  />
                  <path
                    d="M10 9H8"
                  />
                  <path
                    d="M16 13H8"
                  />
                  <path
                    d="M16 17H8"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Write Pitch
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Craft a message to clubs
                  </div>
                </div>
              </div>
            </button>
            <button
              class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Evaluate Potential
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Analyze your abilities
                  </div>
                </div>
              </div>
            </button>
            <button
              class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="22 7 13.5 15.5 8.5 10.5 2 17"
                  />
                  <polyline
                    points="16 7 22 7 22 13"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Get Tips
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Improve your game
                  </div>
                </div>
              </div>
            </button>
            <button
              class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
            >
              <div
                class="flex items-start gap-2"
              >
                <svg
                  class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <div>
                  <div
                    class="text-sm font-medium"
                  >
                    Build Profile
                  </div>
                  <div
                    class="text-xs opacity-80"
                  >
                    Strengthen your profile
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div
          class="relative overflow-hidden flex-1 p-4"
          dir="ltr"
          style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
        >
          <div
            class="h-full w-full rounded-[inherit]"
            data-radix-scroll-area-viewport=""
            style="overflow-x: hidden; overflow-y: scroll;"
          >
            <div
              style="min-width: 100%; display: table;"
            >
              <div
                class="flex items-center justify-center h-full text-center text-muted-foreground"
              >
                <div>
                  <svg
                    class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                    />
                    <path
                      d="M9 18h6"
                    />
                    <path
                      d="M10 22h4"
                    />
                  </svg>
                  <p
                    class="text-sm"
                  >
                    Select a category above and ask me anything!
                  </p>
                  <p
                    class="text-xs mt-2"
                  >
                    I'm here to help you succeed.
                  </p>
                </div>
              </div>
              <div
                class="space-y-4"
              />
            </div>
          </div>
        </div>
        <div
          class="p-4 border-t border-border"
        >
          <div
            class="flex gap-2"
          >
            <textarea
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              placeholder="Ask me anything about your football career..."
              rows="2"
            >
              Test message
            </textarea>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            >
              <svg
                class="lucide lucide-send h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                />
                <path
                  d="m21.854 2.147-10.94 10.939"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» src/test/components/AICoachChat.test.tsx:69:26
     67| 
     68|     await waitFor(() => {
     69|       expect(mockInvoke).toHaveBeenCalled();
       |                          ^
     70|     });
     71|   });
 Γ¥» runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
 Γ¥» checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
 Γ¥» Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[2/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > displays chat messages
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:85:31
     83|     
     84|     const input = screen.getByPlaceholderText(/ask me anything about yΓÇª
     85|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
     86| 
     87|     fireEvent.change(input, { target: { value: 'How do I improve passiΓÇª

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[3/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > clears input after sending message
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:109:31
    107|     
    108|     const input = screen.getByPlaceholderText(/ask me anything about yΓÇª
    109|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
    110| 
    111|     fireEvent.change(input, { target: { value: 'Test message' } });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[4/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > displays error message on chat failure
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:129:31
    127|     
    128|     const input = screen.getByPlaceholderText(/ask me anything about yΓÇª
    129|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
    130| 
    131|     fireEvent.change(input, { target: { value: 'Test message' } });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[5/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > shows loading state while waiting for response
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:146:31
    144|     
    145|     const input = screen.getByPlaceholderText(/ask me anything about yΓÇª
    146|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
    147| 
    148|     fireEvent.change(input, { target: { value: 'Test message' } });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[6/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > disables input while sending message
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:163:31
    161|     
    162|     const input = screen.getByPlaceholderText(/ask me anything about yΓÇª
    163|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
    164| 
    165|     fireEvent.change(input, { target: { value: 'Test message' } });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[7/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > prevents sending empty messages
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:179:31
    177|     render(<AICoachChat />);
    178|     
    179|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
    180|     fireEvent.click(sendButton);
    181| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[8/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > maintains conversation history
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:200:31
    198|     
    199|     const input = screen.getByPlaceholderText(/ask me anything about yΓÇª
    200|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
    201| 
    202|     // First message

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[9/48]ΓÄ»

 FAIL  src/test/components/AICoachChat.test.tsx > AICoachChat Component > handles streaming responses
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/send/i`

Here are the accessible roles:

  heading:

  Name "AI Coach Assistant":
  <h3
    class="text-lg font-semibold text-foreground mb-3"
  />

  --------------------------------------------------
  button:

  Name "Write Pitch Craft a message to clubs":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Evaluate Potential Analyze your abilities":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Get Tips Improve your game":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "Build Profile Strengthen your profile":
  <button
    class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
  />

  Name "":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
    disabled=""
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm"
  />

  Name "":
  <p
    class="text-xs mt-2"
  />

  --------------------------------------------------
  textbox:

  Name "":
  <textarea
    class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
    placeholder="Ask me anything about your football career..."
    rows="2"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border text-card-foreground shadow-sm flex flex-col h-[600px] bg-background border-border"
    >
      <div
        class="p-4 border-b border-border"
      >
        <h3
          class="text-lg font-semibold text-foreground mb-3"
        >
          AI Coach Assistant
        </h3>
        <div
          class="grid grid-cols-2 gap-2"
        >
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-file-text h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                />
                <path
                  d="M14 2v4a2 2 0 0 0 2 2h4"
                />
                <path
                  d="M10 9H8"
                />
                <path
                  d="M16 13H8"
                />
                <path
                  d="M16 17H8"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Write Pitch
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Craft a message to clubs
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-target h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="6"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Evaluate Potential
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Analyze your abilities
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-trending-up h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                />
                <polyline
                  points="16 7 22 7 22 13"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Get Tips
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Improve your game
                </div>
              </div>
            </div>
          </button>
          <button
            class="p-3 rounded-lg border transition-all text-left bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-foreground"
          >
            <div
              class="flex items-start gap-2"
            >
              <svg
                class="lucide lucide-lightbulb h-4 w-4 mt-0.5 flex-shrink-0"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                />
                <path
                  d="M9 18h6"
                />
                <path
                  d="M10 22h4"
                />
              </svg>
              <div>
                <div
                  class="text-sm font-medium"
                >
                  Build Profile
                </div>
                <div
                  class="text-xs opacity-80"
                >
                  Strengthen your profile
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div
        class="relative overflow-hidden flex-1 p-4"
        dir="ltr"
        style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
      >
        <div
          class="h-full w-full rounded-[inherit]"
          data-radix-scroll-area-viewport=""
          style="overflow-x: hidden; overflow-y: scroll;"
        >
          <div
            style="min-width: 100%; display: table;"
          >
            <div
              class="flex items-center justify-center h-full text-center text-muted-foreground"
            >
              <div>
                <svg
                  class="lucide lucide-lightbulb h-12 w-12 mx-auto mb-3 text-accent"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                  />
                  <path
                    d="M9 18h6"
                  />
                  <path
                    d="M10 22h4"
                  />
                </svg>
                <p
                  class="text-sm"
                >
                  Select a category above and ask me anything!
                </p>
                <p
                  class="text-xs mt-2"
                >
                  I'm here to help you succeed.
                </p>
              </div>
            </div>
            <div
              class="space-y-4"
            />
          </div>
        </div>
      </div>
      <div
        class="p-4 border-t border-border"
      >
        <div
          class="flex gap-2"
        >
          <textarea
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Ask me anything about your football career..."
            rows="2"
          />
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 w-10 h-auto"
            disabled=""
          >
            <svg
              class="lucide lucide-send h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
              />
              <path
                d="m21.854 2.147-10.94 10.939"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/AICoachChat.test.tsx:241:31
    239|     
    240|     const input = screen.getByPlaceholderText(/ask me anything about yΓÇª
    241|     const sendButton = screen.getByRole('button', { name: /send/i });
       |                               ^
    242| 
    243|     fireEvent.change(input, { target: { value: 'Test streaming' } });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[10/48]ΓÄ»

 FAIL  src/test/components/ClubMatching.test.tsx > ClubMatching Component > successfully finds matching clubs
AssertionError: expected "vi.fn()" to be called with arguments: [ 'player-club-matching', ΓÇª(1) ]

Number of calls: 0


Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-building2 h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
              />
              <path
                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
              />
              <path
                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
              />
              <path
                d="M10 6h4"
              />
              <path
                d="M10 10h4"
              />
              <path
                d="M10 14h4"
              />
              <path
                d="M10 18h4"
              />
            </svg>
            AI Club Matching
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            disabled=""
          >
            <svg
              class="lucide lucide-target mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="12"
                cy="12"
                r="2"
              />
            </svg>
            Find Matching Clubs
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» src/test/components/ClubMatching.test.tsx:58:26
     56| 
     57|     await waitFor(() => {
     58|       expect(mockInvoke).toHaveBeenCalledWith('player-club-matching', {
       |                          ^
     59|         body: expect.objectContaining({
     60|           playerPosition: mockVideoAnalysis.position,
 Γ¥» runWithExpensiveErrorDiagnosticsDisabled node_modules/@testing-library/dom/dist/config.js:47:12
 Γ¥» checkCallback node_modules/@testing-library/dom/dist/wait-for.js:124:77
 Γ¥» Timeout.checkRealTimersCallback node_modules/@testing-library/dom/dist/wait-for.js:118:16

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[11/48]ΓÄ»

 FAIL  src/test/components/ClubMatching.test.tsx > ClubMatching Component > displays club details
TestingLibraryElementError: Unable to find an element with the text: /amsterdam/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-building2 h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
            />
            <path
              d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
            />
            <path
              d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
            />
            <path
              d="M10 6h4"
            />
            <path
              d="M10 10h4"
            />
            <path
              d="M10 14h4"
            />
            <path
              d="M10 18h4"
            />
          </svg>
          AI Club Matching
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          disabled=""
        >
          <svg
            class="lucide lucide-target mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
            />
          </svg>
          Find Matching Clubs
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-building2 h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
              />
              <path
                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
              />
              <path
                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
              />
              <path
                d="M10 6h4"
              />
              <path
                d="M10 10h4"
              />
              <path
                d="M10 14h4"
              />
              <path
                d="M10 18h4"
              />
            </svg>
            AI Club Matching
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            disabled=""
          >
            <svg
              class="lucide lucide-target mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="12"
                cy="12"
                r="2"
              />
            </svg>
            Find Matching Clubs
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ClubMatching.test.tsx:95:11
     93|     fireEvent.click(button);
     94| 
     95|     await waitFor(() => {
       |           ^
     96|       expect(screen.getByText(/amsterdam/i)).toBeInTheDocument();
     97|       expect(screen.getByText(/netherlands/i)).toBeInTheDocument();

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[12/48]ΓÄ»

 FAIL  src/test/components/ClubMatching.test.tsx > ClubMatching Component > displays match reasons
TestingLibraryElementError: Unable to find an element with the text: /position matches club needs/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-building2 h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
            />
            <path
              d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
            />
            <path
              d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
            />
            <path
              d="M10 6h4"
            />
            <path
              d="M10 10h4"
            />
            <path
              d="M10 14h4"
            />
            <path
              d="M10 18h4"
            />
          </svg>
          AI Club Matching
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          disabled=""
        >
          <svg
            class="lucide lucide-target mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
            />
          </svg>
          Find Matching Clubs
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-building2 h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
              />
              <path
                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
              />
              <path
                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
              />
              <path
                d="M10 6h4"
              />
              <path
                d="M10 10h4"
              />
              <path
                d="M10 14h4"
              />
              <path
                d="M10 18h4"
              />
            </svg>
            AI Club Matching
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            disabled=""
          >
            <svg
              class="lucide lucide-target mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="12"
                cy="12"
                r="2"
              />
            </svg>
            Find Matching Clubs
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ClubMatching.test.tsx:128:11
    126|     fireEvent.click(button);
    127| 
    128|     await waitFor(() => {
       |           ^
    129|       expect(screen.getByText(/position matches club needs/i)).toBeInTΓÇª
    130|       expect(screen.getByText(/playing style is compatible/i)).toBeInTΓÇª

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[13/48]ΓÄ»

 FAIL  src/test/components/ClubMatching.test.tsx > ClubMatching Component > displays error message on matching failure
TestingLibraryElementError: Unable to find an element with the text: /failed to find matches/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-building2 h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
            />
            <path
              d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
            />
            <path
              d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
            />
            <path
              d="M10 6h4"
            />
            <path
              d="M10 10h4"
            />
            <path
              d="M10 14h4"
            />
            <path
              d="M10 18h4"
            />
          </svg>
          AI Club Matching
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          disabled=""
        >
          <svg
            class="lucide lucide-target mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
            />
          </svg>
          Find Matching Clubs
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-building2 h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
              />
              <path
                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
              />
              <path
                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
              />
              <path
                d="M10 6h4"
              />
              <path
                d="M10 10h4"
              />
              <path
                d="M10 14h4"
              />
              <path
                d="M10 18h4"
              />
            </svg>
            AI Club Matching
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            disabled=""
          >
            <svg
              class="lucide lucide-target mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="12"
                cy="12"
                r="2"
              />
            </svg>
            Find Matching Clubs
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ClubMatching.test.tsx:147:11
    145|     fireEvent.click(button);
    146| 
    147|     await waitFor(() => {
       |           ^
    148|       expect(screen.getByText(/failed to find matches/i)).toBeInTheDocΓÇª
    149|     });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[14/48]ΓÄ»

 FAIL  src/test/components/ClubMatching.test.tsx > ClubMatching Component > shows loading state during matching
TestingLibraryElementError: Unable to find an element with the text: /finding.*matches?/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-building2 h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
            />
            <path
              d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
            />
            <path
              d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
            />
            <path
              d="M10 6h4"
            />
            <path
              d="M10 10h4"
            />
            <path
              d="M10 14h4"
            />
            <path
              d="M10 18h4"
            />
          </svg>
          AI Club Matching
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          disabled=""
        >
          <svg
            class="lucide lucide-target mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
            />
          </svg>
          Find Matching Clubs
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-building2 h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
              />
              <path
                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
              />
              <path
                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
              />
              <path
                d="M10 6h4"
              />
              <path
                d="M10 10h4"
              />
              <path
                d="M10 14h4"
              />
              <path
                d="M10 18h4"
              />
            </svg>
            AI Club Matching
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            disabled=""
          >
            <svg
              class="lucide lucide-target mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="12"
                cy="12"
                r="2"
              />
            </svg>
            Find Matching Clubs
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ClubMatching.test.tsx:161:11
    159|     fireEvent.click(button);
    160| 
    161|     await waitFor(() => {
       |           ^
    162|       expect(screen.getByText(/finding.*matches?/i)).toBeInTheDocumentΓÇª
    163|     });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[15/48]ΓÄ»

 FAIL  src/test/components/ClubMatching.test.tsx > ClubMatching Component > sorts clubs by match score
TestingLibraryElementError: Unable to find an element with the text: /club [ABC]/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-building2 h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
            />
            <path
              d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
            />
            <path
              d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
            />
            <path
              d="M10 6h4"
            />
            <path
              d="M10 10h4"
            />
            <path
              d="M10 14h4"
            />
            <path
              d="M10 18h4"
            />
          </svg>
          AI Club Matching
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          disabled=""
        >
          <svg
            class="lucide lucide-target mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
            />
          </svg>
          Find Matching Clubs
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-building2 h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
              />
              <path
                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
              />
              <path
                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
              />
              <path
                d="M10 6h4"
              />
              <path
                d="M10 10h4"
              />
              <path
                d="M10 14h4"
              />
              <path
                d="M10 18h4"
              />
            </svg>
            AI Club Matching
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            disabled=""
          >
            <svg
              class="lucide lucide-target mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="12"
                cy="12"
                r="2"
              />
            </svg>
            Find Matching Clubs
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ClubMatching.test.tsx:184:11
    182|     fireEvent.click(button);
    183| 
    184|     await waitFor(() => {
       |           ^
    185|       const clubs = screen.getAllByText(/club [ABC]/i);
    186|       expect(clubs[0]).toHaveTextContent('Club B'); // Highest score fΓÇª

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[16/48]ΓÄ»

 FAIL  src/test/components/ClubMatching.test.tsx > ClubMatching Component > displays no results message when no matches found
TestingLibraryElementError: Unable to find an element with the text: /no.*matches.*found/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-building2 h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
            />
            <path
              d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
            />
            <path
              d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
            />
            <path
              d="M10 6h4"
            />
            <path
              d="M10 10h4"
            />
            <path
              d="M10 14h4"
            />
            <path
              d="M10 18h4"
            />
          </svg>
          AI Club Matching
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          disabled=""
        >
          <svg
            class="lucide lucide-target mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
            />
            <circle
              cx="12"
              cy="12"
              r="6"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
            />
          </svg>
          Find Matching Clubs
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-building2 h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
              />
              <path
                d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
              />
              <path
                d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
              />
              <path
                d="M10 6h4"
              />
              <path
                d="M10 10h4"
              />
              <path
                d="M10 14h4"
              />
              <path
                d="M10 18h4"
              />
            </svg>
            AI Club Matching
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Find clubs that match your playing style, skill level, and career goals using AI-powered matching.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            disabled=""
          >
            <svg
              class="lucide lucide-target mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
              />
              <circle
                cx="12"
                cy="12"
                r="2"
              />
            </svg>
            Find Matching Clubs
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ClubMatching.test.tsx:202:11
    200|     fireEvent.click(button);
    201| 
    202|     await waitFor(() => {
       |           ^
    203|       expect(screen.getByText(/no.*matches.*found/i)).toBeInTheDocumenΓÇª
    204|     });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[17/48]ΓÄ»

 FAIL  src/test/components/Navigation.test.tsx > Navigation Component > has correct link hrefs
TestingLibraryElementError: Found multiple elements with the text: /players|video|clubs|about/i

Here are the matching elements:

Ignored nodes: comments, script, style
<a
  class="text-muted-foreground hover:text-foreground transition-colors"
  href="/players"
>
  Players
</a>

Ignored nodes: comments, script, style
<a
  class="text-muted-foreground hover:text-foreground transition-colors"
  href="/video-analysis"
>
  Video Analysis
</a>

Ignored nodes: comments, script, style
<a
  class="text-muted-foreground hover:text-foreground transition-colors"
  href="/clubs"
>
  Clubs
</a>

Ignored nodes: comments, script, style
<a
  class="text-muted-foreground hover:text-foreground transition-colors"
  href="/about"
>
  About
</a>

(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).

Ignored nodes: comments, script, style
<body>
  <div>
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
    >
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          class="flex items-center justify-between h-16"
        >
          <a
            aria-current="page"
            class="flex items-center gap-3"
            href="/"
          >
            <img
              alt="┘ü┘è ╪╢┘ç╪▒┘â"
              class="h-10 w-10"
              src="/src/assets/logo.png"
            />
            <span
              class="text-xl font-bold text-foreground"
            >
              ┘ü┘è ╪╢┘ç╪▒┘â
            </span>
          </a>
          <div
            class="hidden md:flex items-center gap-8"
          >
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/players"
            >
              Players
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/video-analysis"
            >
              Video Analysis
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/clubs"
            >
              Clubs
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/about"
            >
              About
            </a>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Sign In
            </button>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Get Started
            </button>
          </div>
          <button
            aria-label="Toggle menu"
            class="md:hidden p-2"
          >
            <svg
              class="lucide lucide-menu h-6 w-6 text-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                x2="20"
                y1="12"
                y2="12"
              />
              <line
                x1="4"
                x2="20"
                y1="6"
                y2="6"
              />
              <line
                x1="4"
                x2="20"
                y1="18"
                y2="18"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getElementError node_modules/@testing-library/dom/dist/query-helpers.js:20:35
 Γ¥» getMultipleElementsFoundError node_modules/@testing-library/dom/dist/query-helpers.js:23:10
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:55:13
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/Navigation.test.tsx:38:29
     36|     renderWithRouter(<Navigation />);
     37|     
     38|     const homeLink = screen.getByText(/players|video|clubs|about/i).clΓÇª
       |                             ^
     39|     const videoLink = screen.getByText(/video analysis/i).closest('a');
     40|     const playersLink = screen.getByText(/players/i).closest('a');

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[18/48]ΓÄ»

 FAIL  src/test/components/Navigation.test.tsx > Navigation Component > toggles mobile menu when menu button clicked
TestingLibraryElementError: Unable to find an element with the text: /home/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
    >
      <div
        class="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          class="flex items-center justify-between h-16"
        >
          <a
            aria-current="page"
            class="flex items-center gap-3"
            href="/"
          >
            <img
              alt="┘ü┘è ╪╢┘ç╪▒┘â"
              class="h-10 w-10"
              src="/src/assets/logo.png"
            />
            <span
              class="text-xl font-bold text-foreground"
            >
              ┘ü┘è ╪╢┘ç╪▒┘â
            </span>
          </a>
          <div
            class="hidden md:flex items-center gap-8"
          >
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/players"
            >
              Players
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/video-analysis"
            >
              Video Analysis
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/clubs"
            >
              Clubs
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors"
              href="/about"
            >
              About
            </a>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Sign In
            </button>
            <button
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Get Started
            </button>
          </div>
          <button
            aria-label="Toggle menu"
            class="md:hidden p-2"
          >
            <svg
              class="lucide lucide-x h-6 w-6 text-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6 6 18"
              />
              <path
                d="m6 6 12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="md:hidden py-4 border-t border-border"
        >
          <div
            class="flex flex-col gap-4"
          >
            <a
              class="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              href="/players"
            >
              Players
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              href="/video-analysis"
            >
              Video Analysis
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              href="/clubs"
            >
              Clubs
            </a>
            <a
              class="text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              href="/about"
            >
              About
            </a>
            <div
              class="flex flex-col gap-2 px-4 pt-2"
            >
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                Sign In
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:109:15
 Γ¥» src/test/components/Navigation.test.tsx:77:32
     75| 
     76|     // Mobile menu should appear with nav links
     77|     const mobileLinks = screen.getAllByText(/home/i);
       |                                ^
     78|     expect(mobileLinks.length).toBeGreaterThan(1); // Desktop + mobileΓÇª
     79|   });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[19/48]ΓÄ»

 FAIL  src/test/components/ProtectedRoute.test.tsx > ProtectedRoute Component > redirects to sign in when not authenticated
 FAIL  src/test/components/ProtectedRoute.test.tsx > ProtectedRoute Component > renders children when authenticated
ReferenceError: isAuthenticated is not defined
 Γ¥» useAuth src/test/components/ProtectedRoute.test.tsx:14:13
     12|     AuthProvider: ({ children }: { children: React.ReactNode }) => chiΓÇª
     13|     useAuth: () => ({
     14|       user: isAuthenticated ? { id: 'test-id', email: 'test@example.coΓÇª
       |             ^
     15|       session: isAuthenticated ? { access_token: 'token' } : null,
     16|       loading: false,
 Γ¥» ProtectedRoute src/components/ProtectedRoute.tsx:10:29
 Γ¥» renderWithHooks node_modules/react-dom/cjs/react-dom.development.js:15486:18
 Γ¥» mountIndeterminateComponent node_modules/react-dom/cjs/react-dom.development.js:20103:13
 Γ¥» beginWork node_modules/react-dom/cjs/react-dom.development.js:21626:16
 Γ¥» beginWork$1 node_modules/react-dom/cjs/react-dom.development.js:27465:14
 Γ¥» performUnitOfWork node_modules/react-dom/cjs/react-dom.development.js:26599:12
 Γ¥» workLoopSync node_modules/react-dom/cjs/react-dom.development.js:26505:5
 Γ¥» renderRootSync node_modules/react-dom/cjs/react-dom.development.js:26473:7
 Γ¥» recoverFromConcurrentError node_modules/react-dom/cjs/react-dom.development.js:25889:20

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[20/48]ΓÄ»

 FAIL  src/test/components/ScoutingReport.test.tsx > ScoutingReport Component > successfully generates scouting report
TestingLibraryElementError: Unable to find an element with the text: /high potential/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-file-text h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Professional Scouting Report
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Generate a comprehensive professional scouting report based on the video analysis.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <svg
            class="lucide lucide-file-text mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Generate Scouting Report
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-file-text h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Professional Scouting Report
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Generate a comprehensive professional scouting report based on the video analysis.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <svg
              class="lucide lucide-file-text mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Generate Scouting Report
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ScoutingReport.test.tsx:55:11
     53|     });
     54| 
     55|     await waitFor(() => {
       |           ^
     56|       expect(screen.getByText(/high potential/i)).toBeInTheDocument();
     57|       expect(screen.getByText(/immediate signing/i)).toBeInTheDocumentΓÇª

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[21/48]ΓÄ»

 FAIL  src/test/components/ScoutingReport.test.tsx > ScoutingReport Component > displays error message on report generation failure
TestingLibraryElementError: Unable to find an element with the text: /failed to generate report/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-file-text h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Professional Scouting Report
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Generate a comprehensive professional scouting report based on the video analysis.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <svg
            class="lucide lucide-file-text mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Generate Scouting Report
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-file-text h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Professional Scouting Report
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Generate a comprehensive professional scouting report based on the video analysis.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <svg
              class="lucide lucide-file-text mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Generate Scouting Report
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ScoutingReport.test.tsx:73:11
     71|     fireEvent.click(button);
     72| 
     73|     await waitFor(() => {
       |           ^
     74|       expect(screen.getByText(/failed to generate report/i)).toBeInTheΓÇª
     75|     });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[22/48]ΓÄ»

 FAIL  src/test/components/ScoutingReport.test.tsx > ScoutingReport Component > displays scout recommendations
TestingLibraryElementError: Unable to find an element with the text: /excellent prospect/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-file-text h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Professional Scouting Report
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Generate a comprehensive professional scouting report based on the video analysis.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <svg
            class="lucide lucide-file-text mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Generate Scouting Report
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-file-text h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Professional Scouting Report
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Generate a comprehensive professional scouting report based on the video analysis.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <svg
              class="lucide lucide-file-text mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Generate Scouting Report
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ScoutingReport.test.tsx:114:11
    112|     fireEvent.click(button);
    113| 
    114|     await waitFor(() => {
       |           ^
    115|       expect(screen.getByText(/excellent prospect/i)).toBeInTheDocumenΓÇª
    116|       expect(screen.getByText(/monitor closely/i)).toBeInTheDocument();

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[23/48]ΓÄ»

 FAIL  src/test/components/ScoutingReport.test.tsx > ScoutingReport Component > allows downloading report as PDF
TestingLibraryElementError: Unable to find role="button" and name `/download.*pdf/i`

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <h3
          class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
        >
          <svg
            class="lucide lucide-file-text h-5 w-5"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Professional Scouting Report
        </h3>
      </div>
      <div
        class="p-6 text-center py-8"
      >
        <p
          class="text-muted-foreground mb-4"
        >
          Generate a comprehensive professional scouting report based on the video analysis.
        </p>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <svg
            class="lucide lucide-file-text mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
            />
            <path
              d="M10 9H8"
            />
            <path
              d="M16 13H8"
            />
            <path
              d="M16 17H8"
            />
          </svg>
          Generate Scouting Report
        </button>
      </div>
    </div>
  </div>
</body>

Ignored nodes: comments, script, style
<html>
  <head />
  <body>
    <div>
      <div
        class="rounded-lg border bg-card text-card-foreground shadow-sm"
      >
        <div
          class="flex flex-col space-y-1.5 p-6"
        >
          <h3
            class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2"
          >
            <svg
              class="lucide lucide-file-text h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Professional Scouting Report
          </h3>
        </div>
        <div
          class="p-6 text-center py-8"
        >
          <p
            class="text-muted-foreground mb-4"
          >
            Generate a comprehensive professional scouting report based on the video analysis.
          </p>
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <svg
              class="lucide lucide-file-text mr-2 h-4 w-4"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
              />
              <path
                d="M14 2v4a2 2 0 0 0 2 2h4"
              />
              <path
                d="M10 9H8"
              />
              <path
                d="M16 13H8"
              />
              <path
                d="M16 17H8"
              />
            </svg>
            Generate Scouting Report
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 Γ¥» waitForWrapper node_modules/@testing-library/dom/dist/wait-for.js:163:27
 Γ¥» src/test/components/ScoutingReport.test.tsx:139:11
    137|     fireEvent.click(generateButton);
    138| 
    139|     await waitFor(() => {
       |           ^
    140|       const downloadButton = screen.getByRole('button', { name: /downlΓÇª
    141|       expect(downloadButton).toBeInTheDocument();

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[24/48]ΓÄ»

 FAIL  src/test/components/VideoUpload.test.tsx > VideoUpload Component > renders video upload form
TestingLibraryElementError: Unable to find an element with the text: /upload your video/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <div
          class="flex items-center gap-3 mb-2"
        >
          <svg
            class="lucide lucide-video h-6 w-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect
              height="12"
              rx="2"
              width="14"
              x="2"
              y="6"
            />
          </svg>
          <h3
            class="text-2xl font-semibold leading-none tracking-tight"
          >
            Upload Match Video
          </h3>
        </div>
        <p
          class="text-sm text-muted-foreground"
        >
          Upload your footage for AI-powered analysis, scouting reports, and club matching
        </p>
      </div>
      <div
        class="p-6 pt-0 space-y-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Player Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Your name"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Age
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="18"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Height (cm)
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="180"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Position *
            </label>
            <button
              aria-autocomplete="none"
              aria-controls="radix-:r0:"
              aria-expanded="false"
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              data-placeholder=""
              data-state="closed"
              dir="ltr"
              role="combobox"
              type="button"
            >
              <span
                style="pointer-events: none;"
              >
                Select
              </span>
              <svg
                aria-hidden="true"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer border-muted-foreground/25 hover:border-primary/50"
        >
          <input
            accept="video/*"
            class="hidden"
            type="file"
          />
          <div
            class="space-y-2"
          >
            <svg
              class="lucide lucide-upload h-10 w-10 mx-auto text-muted-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            <p
              class="font-medium"
            >
              Click to upload video
            </p>
            <p
              class="text-sm text-muted-foreground"
            >
              MP4, MOV up to 100MB
            </p>
          </div>
        </div>
        <div
          class="flex gap-3"
        >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1"
            disabled=""
          >
            <svg
              class="lucide lucide-upload h-4 w-4 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/VideoUpload.test.tsx:15:19
     13|     render(<VideoUpload />);
     14|     
     15|     expect(screen.getByText(/upload your video/i)).toBeInTheDocument();
       |                   ^
     16|     expect(screen.getByLabelText(/position/i)).toBeInTheDocument();
     17|     expect(screen.getByLabelText(/age/i)).toBeInTheDocument();

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[25/48]ΓÄ»

 FAIL  src/test/components/VideoUpload.test.tsx > VideoUpload Component > accepts video file upload
TestingLibraryElementError: Unable to find a label with the text of: /choose video file/i

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <div
          class="flex items-center gap-3 mb-2"
        >
          <svg
            class="lucide lucide-video h-6 w-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect
              height="12"
              rx="2"
              width="14"
              x="2"
              y="6"
            />
          </svg>
          <h3
            class="text-2xl font-semibold leading-none tracking-tight"
          >
            Upload Match Video
          </h3>
        </div>
        <p
          class="text-sm text-muted-foreground"
        >
          Upload your footage for AI-powered analysis, scouting reports, and club matching
        </p>
      </div>
      <div
        class="p-6 pt-0 space-y-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Player Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Your name"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Age
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="18"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Height (cm)
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="180"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Position *
            </label>
            <button
              aria-autocomplete="none"
              aria-controls="radix-:rd:"
              aria-expanded="false"
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              data-placeholder=""
              data-state="closed"
              dir="ltr"
              role="combobox"
              type="button"
            >
              <span
                style="pointer-events: none;"
              >
                Select
              </span>
              <svg
                aria-hidden="true"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer border-muted-foreground/25 hover:border-primary/50"
        >
          <input
            accept="video/*"
            class="hidden"
            type="file"
          />
          <div
            class="space-y-2"
          >
            <svg
              class="lucide lucide-upload h-10 w-10 mx-auto text-muted-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            <p
              class="font-medium"
            >
              Click to upload video
            </p>
            <p
              class="text-sm text-muted-foreground"
            >
              MP4, MOV up to 100MB
            </p>
          </div>
        </div>
        <div
          class="flex gap-3"
        >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1"
            disabled=""
          >
            <svg
              class="lucide lucide-upload h-4 w-4 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getAllByLabelText node_modules/@testing-library/dom/dist/queries/label-text.js:111:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/VideoUpload.test.tsx:25:26
     23|     
     24|     const file = new File(['video content'], 'test-video.mp4', { type:ΓÇª
     25|     const input = screen.getByLabelText(/choose video file/i) as HTMLIΓÇª
       |                          ^
     26|     
     27|     fireEvent.change(input, { target: { files: [file] } });

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[26/48]ΓÄ»

 FAIL  src/test/components/VideoUpload.test.tsx > VideoUpload Component > successfully uploads video and triggers analysis
TestingLibraryElementError: Unable to find a label with the text of: /choose video file/i

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <div
          class="flex items-center gap-3 mb-2"
        >
          <svg
            class="lucide lucide-video h-6 w-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect
              height="12"
              rx="2"
              width="14"
              x="2"
              y="6"
            />
          </svg>
          <h3
            class="text-2xl font-semibold leading-none tracking-tight"
          >
            Upload Match Video
          </h3>
        </div>
        <p
          class="text-sm text-muted-foreground"
        >
          Upload your footage for AI-powered analysis, scouting reports, and club matching
        </p>
      </div>
      <div
        class="p-6 pt-0 space-y-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Player Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Your name"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Age
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="18"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Height (cm)
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="180"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Position *
            </label>
            <button
              aria-autocomplete="none"
              aria-controls="radix-:r17:"
              aria-expanded="false"
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              data-placeholder=""
              data-state="closed"
              dir="ltr"
              role="combobox"
              type="button"
            >
              <span
                style="pointer-events: none;"
              >
                Select
              </span>
              <svg
                aria-hidden="true"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer border-muted-foreground/25 hover:border-primary/50"
        >
          <input
            accept="video/*"
            class="hidden"
            type="file"
          />
          <div
            class="space-y-2"
          >
            <svg
              class="lucide lucide-upload h-10 w-10 mx-auto text-muted-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            <p
              class="font-medium"
            >
              Click to upload video
            </p>
            <p
              class="text-sm text-muted-foreground"
            >
              MP4, MOV up to 100MB
            </p>
          </div>
        </div>
        <div
          class="flex gap-3"
        >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1"
            disabled=""
          >
            <svg
              class="lucide lucide-upload h-4 w-4 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getAllByLabelText node_modules/@testing-library/dom/dist/queries/label-text.js:111:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/VideoUpload.test.tsx:68:30
     66|     
     67|     const file = new File(['video content'], 'test-video.mp4', { type:ΓÇª
     68|     const fileInput = screen.getByLabelText(/choose video file/i);
       |                              ^
     69|     fireEvent.change(fileInput, { target: { files: [file] } });
     70| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[27/48]ΓÄ»

 FAIL  src/test/components/VideoUpload.test.tsx > VideoUpload Component > displays error message on upload failure
TestingLibraryElementError: Unable to find a label with the text of: /choose video file/i

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <div
          class="flex items-center gap-3 mb-2"
        >
          <svg
            class="lucide lucide-video h-6 w-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect
              height="12"
              rx="2"
              width="14"
              x="2"
              y="6"
            />
          </svg>
          <h3
            class="text-2xl font-semibold leading-none tracking-tight"
          >
            Upload Match Video
          </h3>
        </div>
        <p
          class="text-sm text-muted-foreground"
        >
          Upload your footage for AI-powered analysis, scouting reports, and club matching
        </p>
      </div>
      <div
        class="p-6 pt-0 space-y-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Player Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Your name"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Age
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="18"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Height (cm)
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="180"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Position *
            </label>
            <button
              aria-autocomplete="none"
              aria-controls="radix-:r1k:"
              aria-expanded="false"
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              data-placeholder=""
              data-state="closed"
              dir="ltr"
              role="combobox"
              type="button"
            >
              <span
                style="pointer-events: none;"
              >
                Select
              </span>
              <svg
                aria-hidden="true"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer border-muted-foreground/25 hover:border-primary/50"
        >
          <input
            accept="video/*"
            class="hidden"
            type="file"
          />
          <div
            class="space-y-2"
          >
            <svg
              class="lucide lucide-upload h-10 w-10 mx-auto text-muted-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            <p
              class="font-medium"
            >
              Click to upload video
            </p>
            <p
              class="text-sm text-muted-foreground"
            >
              MP4, MOV up to 100MB
            </p>
          </div>
        </div>
        <div
          class="flex gap-3"
        >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1"
            disabled=""
          >
            <svg
              class="lucide lucide-upload h-4 w-4 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getAllByLabelText node_modules/@testing-library/dom/dist/queries/label-text.js:111:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/VideoUpload.test.tsx:112:30
    110|     
    111|     const file = new File(['video content'], 'test-video.mp4', { type:ΓÇª
    112|     const fileInput = screen.getByLabelText(/choose video file/i);
       |                              ^
    113|     fireEvent.change(fileInput, { target: { files: [file] } });
    114| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[28/48]ΓÄ»

 FAIL  src/test/components/VideoUpload.test.tsx > VideoUpload Component > shows loading state during upload
TestingLibraryElementError: Unable to find a label with the text of: /choose video file/i

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <div
          class="flex items-center gap-3 mb-2"
        >
          <svg
            class="lucide lucide-video h-6 w-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect
              height="12"
              rx="2"
              width="14"
              x="2"
              y="6"
            />
          </svg>
          <h3
            class="text-2xl font-semibold leading-none tracking-tight"
          >
            Upload Match Video
          </h3>
        </div>
        <p
          class="text-sm text-muted-foreground"
        >
          Upload your footage for AI-powered analysis, scouting reports, and club matching
        </p>
      </div>
      <div
        class="p-6 pt-0 space-y-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Player Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Your name"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Age
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="18"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Height (cm)
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="180"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Position *
            </label>
            <button
              aria-autocomplete="none"
              aria-controls="radix-:r21:"
              aria-expanded="false"
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              data-placeholder=""
              data-state="closed"
              dir="ltr"
              role="combobox"
              type="button"
            >
              <span
                style="pointer-events: none;"
              >
                Select
              </span>
              <svg
                aria-hidden="true"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer border-muted-foreground/25 hover:border-primary/50"
        >
          <input
            accept="video/*"
            class="hidden"
            type="file"
          />
          <div
            class="space-y-2"
          >
            <svg
              class="lucide lucide-upload h-10 w-10 mx-auto text-muted-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            <p
              class="font-medium"
            >
              Click to upload video
            </p>
            <p
              class="text-sm text-muted-foreground"
            >
              MP4, MOV up to 100MB
            </p>
          </div>
        </div>
        <div
          class="flex gap-3"
        >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1"
            disabled=""
          >
            <svg
              class="lucide lucide-upload h-4 w-4 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getAllByLabelText node_modules/@testing-library/dom/dist/queries/label-text.js:111:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/VideoUpload.test.tsx:135:30
    133|     
    134|     const file = new File(['video content'], 'test-video.mp4', { type:ΓÇª
    135|     const fileInput = screen.getByLabelText(/choose video file/i);
       |                              ^
    136|     fireEvent.change(fileInput, { target: { files: [file] } });
    137| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[29/48]ΓÄ»

 FAIL  src/test/components/VideoUpload.test.tsx > VideoUpload Component > validates file type
TestingLibraryElementError: Unable to find a label with the text of: /choose video file/i

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <div
          class="flex items-center gap-3 mb-2"
        >
          <svg
            class="lucide lucide-video h-6 w-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect
              height="12"
              rx="2"
              width="14"
              x="2"
              y="6"
            />
          </svg>
          <h3
            class="text-2xl font-semibold leading-none tracking-tight"
          >
            Upload Match Video
          </h3>
        </div>
        <p
          class="text-sm text-muted-foreground"
        >
          Upload your footage for AI-powered analysis, scouting reports, and club matching
        </p>
      </div>
      <div
        class="p-6 pt-0 space-y-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Player Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Your name"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Age
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="18"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Height (cm)
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="180"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Position *
            </label>
            <button
              aria-autocomplete="none"
              aria-controls="radix-:r2e:"
              aria-expanded="false"
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              data-placeholder=""
              data-state="closed"
              dir="ltr"
              role="combobox"
              type="button"
            >
              <span
                style="pointer-events: none;"
              >
                Select
              </span>
              <svg
                aria-hidden="true"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer border-muted-foreground/25 hover:border-primary/50"
        >
          <input
            accept="video/*"
            class="hidden"
            type="file"
          />
          <div
            class="space-y-2"
          >
            <svg
              class="lucide lucide-upload h-10 w-10 mx-auto text-muted-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            <p
              class="font-medium"
            >
              Click to upload video
            </p>
            <p
              class="text-sm text-muted-foreground"
            >
              MP4, MOV up to 100MB
            </p>
          </div>
        </div>
        <div
          class="flex gap-3"
        >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1"
            disabled=""
          >
            <svg
              class="lucide lucide-upload h-4 w-4 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getAllByLabelText node_modules/@testing-library/dom/dist/queries/label-text.js:111:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/VideoUpload.test.tsx:153:30
    151|     
    152|     const file = new File(['content'], 'test.txt', { type: 'text/plainΓÇª
    153|     const fileInput = screen.getByLabelText(/choose video file/i);
       |                              ^
    154|     fireEvent.change(fileInput, { target: { files: [file] } });
    155| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[30/48]ΓÄ»

 FAIL  src/test/components/VideoUpload.test.tsx > VideoUpload Component > validates file size
TestingLibraryElementError: Unable to find a label with the text of: /choose video file/i

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
    >
      <div
        class="flex flex-col space-y-1.5 p-6"
      >
        <div
          class="flex items-center gap-3 mb-2"
        >
          <svg
            class="lucide lucide-video h-6 w-6 text-primary"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
            />
            <rect
              height="12"
              rx="2"
              width="14"
              x="2"
              y="6"
            />
          </svg>
          <h3
            class="text-2xl font-semibold leading-none tracking-tight"
          >
            Upload Match Video
          </h3>
        </div>
        <p
          class="text-sm text-muted-foreground"
        >
          Upload your footage for AI-powered analysis, scouting reports, and club matching
        </p>
      </div>
      <div
        class="p-6 pt-0 space-y-6"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Player Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="Your name"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Age
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="18"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Height (cm)
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              placeholder="180"
              type="number"
              value=""
            />
          </div>
          <div
            class="space-y-2"
          >
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Position *
            </label>
            <button
              aria-autocomplete="none"
              aria-controls="radix-:r2r:"
              aria-expanded="false"
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
              data-placeholder=""
              data-state="closed"
              dir="ltr"
              role="combobox"
              type="button"
            >
              <span
                style="pointer-events: none;"
              >
                Select
              </span>
              <svg
                aria-hidden="true"
                class="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m6 9 6 6 6-6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer border-muted-foreground/25 hover:border-primary/50"
        >
          <input
            accept="video/*"
            class="hidden"
            type="file"
          />
          <div
            class="space-y-2"
          >
            <svg
              class="lucide lucide-upload h-10 w-10 mx-auto text-muted-foreground"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            <p
              class="font-medium"
            >
              Click to upload video
            </p>
            <p
              class="text-sm text-muted-foreground"
            >
              MP4, MOV up to 100MB
            </p>
          </div>
        </div>
        <div
          class="flex gap-3"
        >
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex-1"
            disabled=""
          >
            <svg
              class="lucide lucide-upload h-4 w-4 mr-2"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              />
              <polyline
                points="17 8 12 3 7 8"
              />
              <line
                x1="12"
                x2="12"
                y1="3"
                y2="15"
              />
            </svg>
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getAllByLabelText node_modules/@testing-library/dom/dist/queries/label-text.js:111:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/components/VideoUpload.test.tsx:172:30
    170|     Object.defineProperty(largeFile, 'size', { value: 101 * 1024 * 102ΓÇª
    171|     
    172|     const fileInput = screen.getByLabelText(/choose video file/i);
       |                              ^
    173|     fireEvent.change(fileInput, { target: { files: [largeFile] } });
    174| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[31/48]ΓÄ»

 FAIL  src/test/integration/App.test.tsx > App Integration Tests > has navigation component
TestingLibraryElementError: Unable to find an element with the text: /future pro path/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      aria-label="Notifications (F8)"
      role="region"
      style="pointer-events: none;"
      tabindex="-1"
    >
      <ol
        class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        tabindex="-1"
      />
    </div>
    <section
      aria-atomic="false"
      aria-label="Notifications alt+T"
      aria-live="polite"
      aria-relevant="additions text"
      tabindex="-1"
    />
    <div
      class="min-h-screen bg-background"
    >
      <nav
        class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
      >
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            class="flex items-center justify-between h-16"
          >
            <a
              aria-current="page"
              class="flex items-center gap-3"
              href="/"
            >
              <img
                alt="┘ü┘è ╪╢┘ç╪▒┘â"
                class="h-10 w-10"
                src="/src/assets/logo.png"
              />
              <span
                class="text-xl font-bold text-foreground"
              >
                ┘ü┘è ╪╢┘ç╪▒┘â
              </span>
            </a>
            <div
              class="hidden md:flex items-center gap-8"
            >
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/players"
              >
                Players
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/video-analysis"
              >
                Video Analysis
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/clubs"
              >
                Clubs
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/about"
              >
                About
              </a>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Sign In
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Get Started
              </button>
            </div>
            <button
              aria-label="Toggle menu"
              class="md:hidden p-2"
            >
              <svg
                class="lucide lucide-menu h-6 w-6 text-foreground"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4"
                  x2="20"
                  y1="12"
                  y2="12"
                />
                <line
                  x1="4"
                  x2="20"
                  y1="6"
                  y2="6"
                />
                <line
                  x1="4"
                  x2="20"
                  y1="18"
                  y2="18"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <section
        class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5"
      >
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        >
          <div
            class="max-w-5xl mx-auto text-center"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-accent/10 border border-accent/20 rounded-full"
            >
              <svg
                class="lucide lucide-sparkles h-4 w-4 text-accent"
                fill="none"
                height="24"[...
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/integration/App.test.tsx:25:19
     23|     renderApp();
     24|     
     25|     expect(screen.getByText(/future pro path/i)).toBeInTheDocument();
       |                   ^
     26|   });
     27| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[32/48]ΓÄ»

 FAIL  src/test/integration/App.test.tsx > App Integration Tests > has all main routes configured
TestingLibraryElementError: Unable to find an element with the text: /^home$/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      aria-label="Notifications (F8)"
      role="region"
      style="pointer-events: none;"
      tabindex="-1"
    >
      <ol
        class="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        tabindex="-1"
      />
    </div>
    <section
      aria-atomic="false"
      aria-label="Notifications alt+T"
      aria-live="polite"
      aria-relevant="additions text"
      tabindex="-1"
    />
    <div
      class="min-h-screen bg-background"
    >
      <nav
        class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
      >
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            class="flex items-center justify-between h-16"
          >
            <a
              aria-current="page"
              class="flex items-center gap-3"
              href="/"
            >
              <img
                alt="┘ü┘è ╪╢┘ç╪▒┘â"
                class="h-10 w-10"
                src="/src/assets/logo.png"
              />
              <span
                class="text-xl font-bold text-foreground"
              >
                ┘ü┘è ╪╢┘ç╪▒┘â
              </span>
            </a>
            <div
              class="hidden md:flex items-center gap-8"
            >
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/players"
              >
                Players
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/video-analysis"
              >
                Video Analysis
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/clubs"
              >
                Clubs
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/about"
              >
                About
              </a>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Sign In
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Get Started
              </button>
            </div>
            <button
              aria-label="Toggle menu"
              class="md:hidden p-2"
            >
              <svg
                class="lucide lucide-menu h-6 w-6 text-foreground"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4"
                  x2="20"
                  y1="12"
                  y2="12"
                />
                <line
                  x1="4"
                  x2="20"
                  y1="6"
                  y2="6"
                />
                <line
                  x1="4"
                  x2="20"
                  y1="18"
                  y2="18"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <section
        class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5"
      >
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        >
          <div
            class="max-w-5xl mx-auto text-center"
          >
            <div
              class="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-accent/10 border border-accent/20 rounded-full"
            >
              <svg
                class="lucide lucide-sparkles h-4 w-4 text-accent"
                fill="none"
                height="24"[...
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/integration/App.test.tsx:42:19
     40|     
     41|     // Check if navigation has all expected links
     42|     expect(screen.getByText(/^home$/i)).toBeInTheDocument();
       |                   ^
     43|     expect(screen.getByText(/video analysis/i)).toBeInTheDocument();
     44|     expect(screen.getByText(/players/i)).toBeInTheDocument();

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[33/48]ΓÄ»

 FAIL  src/test/integration/VideoAnalysisFlow.test.tsx > Video Analysis Full Flow Integration Test > completes full video analysis workflow
TestingLibraryElementError: Unable to find a label with the text of: /choose video file/i

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-background"
    >
      <nav
        class="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
      >
        <div
          class="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            class="flex items-center justify-between h-16"
          >
            <a
              aria-current="page"
              class="flex items-center gap-3"
              href="/"
            >
              <img
                alt="┘ü┘è ╪╢┘ç╪▒┘â"
                class="h-10 w-10"
                src="/src/assets/logo.png"
              />
              <span
                class="text-xl font-bold text-foreground"
              >
                ┘ü┘è ╪╢┘ç╪▒┘â
              </span>
            </a>
            <div
              class="hidden md:flex items-center gap-8"
            >
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/players"
              >
                Players
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/video-analysis"
              >
                Video Analysis
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/clubs"
              >
                Clubs
              </a>
              <a
                class="text-muted-foreground hover:text-foreground transition-colors"
                href="/about"
              >
                About
              </a>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Sign In
              </button>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Get Started
              </button>
            </div>
            <button
              aria-label="Toggle menu"
              class="md:hidden p-2"
            >
              <svg
                class="lucide lucide-menu h-6 w-6 text-foreground"
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4"
                  x2="20"
                  y1="12"
                  y2="12"
                />
                <line
                  x1="4"
                  x2="20"
                  y1="6"
                  y2="6"
                />
                <line
                  x1="4"
                  x2="20"
                  y1="18"
                  y2="18"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <main
        class="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <div
          class="max-w-6xl mx-auto"
        >
          <div
            class="mb-8"
          >
            <h1
              class="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              AI Video Analysis
            </h1>
            <p
              class="text-xl text-muted-foreground"
            >
              Upload your match footage for comprehensive AI-powered performance analysis, professional scouting reports, and club matching.
            </p>
          </div>
          <div
            class="space-y-8"
          >
            <div
              class="rounded-lg border bg-card text-card-foreground shadow-sm border-primary/20"
            >
              <div
                class="flex flex-col space-y-1.5 p-6"
              >
                <div
                  class="flex items-center gap-3 mb-2"
                >
                  <svg
                    class="lucide lucide-video h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    st...
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» getAllByLabelText node_modules/@testing-library/dom/dist/queries/label-text.js:111:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/integration/VideoAnalysisFlow.test.tsx:60:30
     58|     // Step 1: Upload video
     59|     const file = new File(['video'], 'test.mp4', { type: 'video/mp4' }ΓÇª
     60|     const fileInput = screen.getByLabelText(/choose video file/i);
       |                              ^
     61|     fireEvent.change(fileInput, { target: { files: [file] } });
     62| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[34/48]ΓÄ»

 FAIL  src/test/pages/SignIn.test.tsx > SignIn Component > renders sign in form
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Welcome Back
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Sign in to access your football analysis dashboard
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <div
                  class="flex items-center justify-between"
                >
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm"
                    type="button"
                  >
                    Forgot password?
                  </button>
                </div>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Don't have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-up"
              >
                Create one now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignIn.test.tsx:20:19
     18|     
     19|     expect(screen.getByText('Welcome Back')).toBeInTheDocument();
     20|     expect(screen.getByPlaceholderText('your.email@example.com')).toBeΓÇª
       |                   ^
     21|     expect(screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó')).toBeInTheDocument(ΓÇª
     22|     expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheΓÇª

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[35/48]ΓÄ»

 FAIL  src/test/pages/SignIn.test.tsx > SignIn Component > successfully signs in with valid credentials
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Welcome Back
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Sign in to access your football analysis dashboard
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <div
                  class="flex items-center justify-between"
                >
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm"
                    type="button"
                  >
                    Forgot password?
                  </button>
                </div>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Don't have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-up"
              >
                Create one now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignIn.test.tsx:46:31
     44|     renderWithRouter(<SignIn />);
     45|     
     46|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
     47|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
     48|     

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[36/48]ΓÄ»

 FAIL  src/test/pages/SignIn.test.tsx > SignIn Component > displays error message on sign in failure
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Welcome Back
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Sign in to access your football analysis dashboard
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <div
                  class="flex items-center justify-between"
                >
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm"
                    type="button"
                  >
                    Forgot password?
                  </button>
                </div>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Don't have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-up"
              >
                Create one now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignIn.test.tsx:72:31
     70|     renderWithRouter(<SignIn />);
     71|     
     72|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
     73|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
     74|     

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[37/48]ΓÄ»

 FAIL  src/test/pages/SignIn.test.tsx > SignIn Component > shows loading state during sign in
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Welcome Back
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Sign in to access your football analysis dashboard
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <div
                  class="flex items-center justify-between"
                >
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm"
                    type="button"
                  >
                    Forgot password?
                  </button>
                </div>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Don't have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-up"
              >
                Create one now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignIn.test.tsx:92:31
     90|     renderWithRouter(<SignIn />);
     91|     
     92|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
     93|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
     94|     

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[38/48]ΓÄ»

 FAIL  src/test/pages/SignIn.test.tsx > SignIn Component > has link to sign up page
TestingLibraryElementError: Unable to find an element with the text: /sign up/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Welcome Back
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Sign in to access your football analysis dashboard
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <div
                  class="flex items-center justify-between"
                >
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="password"
                  >
                    Password
                  </label>
                  <button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary underline-offset-4 hover:underline p-0 h-auto text-sm"
                    type="button"
                  >
                    Forgot password?
                  </button>
                </div>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Sign In
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Don't have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-up"
              >
                Create one now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignIn.test.tsx:109:31
    107|     renderWithRouter(<SignIn />);
    108|     
    109|     const signUpLink = screen.getByText(/sign up/i);
       |                               ^
    110|     expect(signUpLink).toBeInTheDocument();
    111|     expect(signUpLink.closest('a')).toHaveAttribute('href', '/signup');

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[39/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > renders sign up form
TestingLibraryElementError: Unable to find an element with the text: Create Your Account. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Create Account
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Join Future Pro Path to unlock AI-powered football analysis
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="fullName"
                >
                  Full Name
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="fullName"
                    placeholder="John Doe"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="confirmPassword"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Already have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignUp.test.tsx:19:19
     17|     renderWithRouter(<SignUp />);
     18|     
     19|     expect(screen.getByText('Create Your Account')).toBeInTheDocument(ΓÇª
       |                   ^
     20|     expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument(ΓÇª
     21|     expect(screen.getByPlaceholderText('your.email@example.com')).toBeΓÇª

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[40/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > shows validation errors for empty fields
TestingLibraryElementError: Unable to find an accessible element with the role "button" and name `/sign up/i`

Here are the accessible roles:

  button:

  Name "Back to Home":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
  />

  Name "Create Account":
  <button
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
    type="submit"
  />

  --------------------------------------------------
  heading:

  Name "Create Account":
  <h3
    class="tracking-tight text-3xl font-bold text-center"
  />

  --------------------------------------------------
  paragraph:

  Name "":
  <p
    class="text-sm text-muted-foreground text-center"
  />

  --------------------------------------------------
  textbox:

  Name "Full Name":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
    id="fullName"
    placeholder="John Doe"
    required=""
    type="text"
    value=""
  />

  Name "Email":
  <input
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
    id="email"
    placeholder="you@example.com"
    required=""
    type="email"
    value=""
  />

  --------------------------------------------------
  link:

  Name "Sign in":
  <a
    class="text-primary hover:underline font-medium"
    href="/sign-in"
  />

  --------------------------------------------------

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Create Account
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Join Future Pro Path to unlock AI-powered football analysis
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="fullName"
                >
                  Full Name
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="fullName"
                    placeholder="John Doe"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="confirmPassword"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Already have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignUp.test.tsx:29:33
     27|     renderWithRouter(<SignUp />);
     28|     
     29|     const signUpButton = screen.getByRole('button', { name: /sign up/iΓÇª
       |                                 ^
     30|     fireEvent.click(signUpButton);
     31| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[41/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > shows validation error for invalid email
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Create Account
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Join Future Pro Path to unlock AI-powered football analysis
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="fullName"
                >
                  Full Name
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="fullName"
                    placeholder="John Doe"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="confirmPassword"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Already have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignUp.test.tsx:39:31
     37|     renderWithRouter(<SignUp />);
     38|     
     39|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
     40|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
     41|     const nameInput = screen.getByPlaceholderText('John Doe');

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[42/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > shows validation error for short password
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Create Account
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Join Future Pro Path to unlock AI-powered football analysis
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="fullName"
                >
                  Full Name
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="fullName"
                    placeholder="John Doe"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="confirmPassword"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Already have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignUp.test.tsx:56:31
     54|     renderWithRouter(<SignUp />);
     55|     
     56|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
     57|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
     58|     const nameInput = screen.getByPlaceholderText('John Doe');

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[43/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > successfully signs up with valid credentials
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Create Account
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Join Future Pro Path to unlock AI-powered football analysis
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="fullName"
                >
                  Full Name
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="fullName"
                    placeholder="John Doe"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="confirmPassword"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Already have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignUp.test.tsx:85:31
     83|     
     84|     const nameInput = screen.getByPlaceholderText('John Doe');
     85|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
     86|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
     87|     

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[44/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > displays error message on sign up failure
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Create Account
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Join Future Pro Path to unlock AI-powered football analysis
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="fullName"
                >
                  Full Name
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="fullName"
                    placeholder="John Doe"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="confirmPassword"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Already have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignUp.test.tsx:118:31
    116|     
    117|     const nameInput = screen.getByPlaceholderText('John Doe');
    118|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
    119|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
    120|     

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[45/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > shows loading state during sign up
TestingLibraryElementError: Unable to find an element with the placeholder text of: your.email@example.com

Ignored nodes: comments, script, style
<body>
  <div>
    <div
      class="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4"
    >
      <div
        class="w-full max-w-md"
      >
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <svg
            class="lucide lucide-arrow-left mr-2 h-4 w-4"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12 19-7-7 7-7"
            />
            <path
              d="M19 12H5"
            />
          </svg>
          Back to Home
        </button>
        <div
          class="rounded-lg bg-card text-card-foreground shadow-sm border-2"
        >
          <div
            class="flex flex-col p-6 space-y-1"
          >
            <h3
              class="tracking-tight text-3xl font-bold text-center"
            >
              Create Account
            </h3>
            <p
              class="text-sm text-muted-foreground text-center"
            >
              Join Future Pro Path to unlock AI-powered football analysis
            </p>
          </div>
          <div
            class="p-6 pt-0"
          >
            <form
              class="space-y-4"
            >
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="fullName"
                >
                  Full Name
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-user absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                    />
                    <circle
                      cx="12"
                      cy="7"
                      r="4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="fullName"
                    placeholder="John Doe"
                    required=""
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-mail absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="16"
                      rx="2"
                      width="20"
                      x="2"
                      y="4"
                    />
                    <path
                      d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="email"
                    placeholder="you@example.com"
                    required=""
                    type="email"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="password"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <div
                class="space-y-2"
              >
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassword"
                >
                  Confirm Password
                </label>
                <div
                  class="relative"
                >
                  <svg
                    class="lucide lucide-lock absolute left-3 top-3 h-4 w-4 text-muted-foreground"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
                    <path
                      d="M7 11V7a5 5 0 0 1 10 0v4"
                    />
                  </svg>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10"
                    id="confirmPassword"
                    placeholder="ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó"
                    required=""
                    type="password"
                    value=""
                  />
                </div>
              </div>
              <button
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
          <div
            class="items-center p-6 pt-0 flex flex-col space-y-4"
          >
            <div
              class="text-sm text-muted-foreground text-center"
            >
              Already have an account?
               
              <a
                class="text-primary hover:underline font-medium"
                href="/sign-in"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
 Γ¥» Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 Γ¥» node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 Γ¥» src/test/pages/SignUp.test.tsx:140:31
    138|     
    139|     const nameInput = screen.getByPlaceholderText('John Doe');
    140|     const emailInput = screen.getByPlaceholderText('your.email@exampleΓÇª
       |                               ^
    141|     const passwordInput = screen.getByPlaceholderText('ΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇóΓÇó');
    142|     

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[46/48]ΓÄ»

 FAIL  src/test/pages/SignUp.test.tsx > SignUp Component > has link to sign in page
Error: expect(element).toHaveAttribute("href", "/signin") // element.getAttribute("href") === "/signin"

Expected the element to have attribute:
  href="/signin"
Received:
  href="/sign-in"
 Γ¥» src/test/pages/SignUp.test.tsx:160:37
    158|     const signInLink = screen.getByText(/sign in/i);
    159|     expect(signInLink).toBeInTheDocument();
    160|     expect(signInLink.closest('a')).toHaveAttribute('href', '/signin');
       |                                     ^
    161|   });
    162| 

ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»ΓÄ»[47/48]ΓÄ»


[2m Test Files [22m [1m[31m10 failed[39m[22m[2m | [22m[1m[32m1 passed[39m[22m[90m (11)[39m
[2m      Tests [22m [1m[31m48 failed[39m[22m[2m | [22m[1m[32m18 passed[39m[22m[90m (66)[39m
[2m   Start at [22m 04:27:49
[2m   Duration [22m 19.89s[2m (transform 5.40s, setup 9.42s, import 12.13s, tests 45.33s, environment 23.80s)[22m

