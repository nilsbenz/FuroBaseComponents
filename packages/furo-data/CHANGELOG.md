# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.25.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.25.2...@furo/data@1.25.3) (2021-06-07)

**Note:** Version bump only for package @furo/data





## [1.25.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.25.1...@furo/data@1.25.2) (2021-06-03)


### Bug Fixes

* add empty methods to FNA, consumers of the FNA must not be forced to implement them ([7daedf0](https://github.com/theNorstroem/FuroBaseComponents/commit/7daedf0051ce7fe6554bffbdea878f5eff266344))
* fieldnode adapter works without bind-data ([1f4d8b4](https://github.com/theNorstroem/FuroBaseComponents/commit/1f4d8b4918c135097c8a37d84124d051768e5663))





## [1.25.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.25.0...@furo/data@1.25.1) (2021-05-31)

**Note:** Version bump only for package @furo/data





# [1.25.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.24.0...@furo/data@1.25.0) (2021-05-10)


### Bug Fixes

* notification count ([62a4626](https://github.com/theNorstroem/FuroBaseComponents/commit/62a46261a6ec22093305540ecf881a2a3b4def56))


### Features

* struct support ([6d8b8ba](https://github.com/theNorstroem/FuroBaseComponents/commit/6d8b8bab3ec35314ee98f7493925ad12084b7cb3))





# [1.24.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.23.5...@furo/data@1.24.0) (2021-05-07)


### Bug Fixes

* repeate ([d36033d](https://github.com/theNorstroem/FuroBaseComponents/commit/d36033dab6779edbea7fde10dfc68ef8eed23500))


### Features

* event before-repeated-field-changed on RepeaterNode only, not on the parent or children ([a7854a6](https://github.com/theNorstroem/FuroBaseComponents/commit/a7854a694053be6edb49f82eb58b01c56d5ae82b))
* standard renderer for google.protobuf.Any type, WIP ([5fe4507](https://github.com/theNorstroem/FuroBaseComponents/commit/5fe450768441c27b523e9eef12ea76f436ed5800))





## [1.23.5](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.23.4...@furo/data@1.23.5) (2021-05-05)


### Bug Fixes

* unknown state on any type field node does return a false on isFat and isWrapper now ([eaae679](https://github.com/theNorstroem/FuroBaseComponents/commit/eaae679ecb1f3f2ce7f0f4eda7a457b439af8736))





## [1.23.4](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.23.3...@furo/data@1.23.4) (2021-04-30)


### Bug Fixes

* keep any type info which was given ([4913c41](https://github.com/theNorstroem/FuroBaseComponents/commit/4913c4198edb28bf9480054251e1aab590c09891))





## [1.23.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.23.2...@furo/data@1.23.3) (2021-04-29)

**Note:** Version bump only for package @furo/data





## [1.23.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.23.1...@furo/data@1.23.2) (2021-04-27)


### Bug Fixes

* null value check ([45bc3a2](https://github.com/theNorstroem/FuroBaseComponents/commit/45bc3a28f172dce5dd34ab14875b590e7ded8334))





## [1.23.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.23.0...@furo/data@1.23.1) (2021-04-22)


### Bug Fixes

* set empty map vals ([b1f1ec9](https://github.com/theNorstroem/FuroBaseComponents/commit/b1f1ec9bcadd973989d5a9186749d3c6bb90d374))
* set empty map vals ([83fc43d](https://github.com/theNorstroem/FuroBaseComponents/commit/83fc43d0ee881ba8814d29399aa827693bfe44da))





# [1.23.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.22.0...@furo/data@1.23.0) (2021-04-21)


### Features

* empty and modified FAT attributes/labels ([10f3793](https://github.com/theNorstroem/FuroBaseComponents/commit/10f3793fc1625e1b6e6e3161b2586a1998aa9bf6))





# [1.22.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.21.1...@furo/data@1.22.0) (2021-04-19)


### Features

* initial FieldNodeAdapter.js ([c17fba4](https://github.com/theNorstroem/FuroBaseComponents/commit/c17fba43fcf832a0d15444e63eb51b2b784e3c86))





## [1.21.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.21.0...@furo/data@1.21.1) (2021-04-16)

**Note:** Version bump only for package @furo/data





# [1.21.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.20.0...@furo/data@1.21.0) (2021-04-13)


### Bug Fixes

* added tests with services, which are needed to know for the reverse deep linker ([2dee98d](https://github.com/theNorstroem/FuroBaseComponents/commit/2dee98dc5d886a4a26a8614b1ca439f5f290da43))
* init on data object triggers data-changed-after-inject removed. ([33b34f1](https://github.com/theNorstroem/FuroBaseComponents/commit/33b34f150aa0ff722ade26307e09e8c4e1b33606))
* we should also fire all error events including parse-error if we are not able to parse the response. A standard 401 will not have response data. ([be0b39e](https://github.com/theNorstroem/FuroBaseComponents/commit/be0b39eca9ab05635b727104089d4a4ec6a91b1f))


### Features

* append grpc error response to data objects ([0b21656](https://github.com/theNorstroem/FuroBaseComponents/commit/0b216560d730a50338c239e4931a762ce8c63ada))
* new group error event added. E.g. response-error-4xx, response-error-5xx ([b404b23](https://github.com/theNorstroem/FuroBaseComponents/commit/b404b23b2b19e2b00a93f2e2ce5d32e98fac3519))





# [1.20.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.19.4...@furo/data@1.20.0) (2021-04-01)


### Features

* append grpc error response to data objects ([47e1202](https://github.com/theNorstroem/FuroBaseComponents/commit/47e1202d3e30cd741ffe6fe418edc43244abe19a))





## [1.19.4](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.19.3...@furo/data@1.19.4) (2021-03-23)


### Bug Fixes

* data prperties ([3a5b7ef](https://github.com/theNorstroem/FuroBaseComponents/commit/3a5b7ef4c9d15db26bbc7ec9784786ede2f7710c))





## [1.19.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.19.2...@furo/data@1.19.3) (2021-03-17)

**Note:** Version bump only for package @furo/data





## [1.19.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.19.1...@furo/data@1.19.2) (2021-03-16)


### Bug Fixes

* If required, the complete FieldNode structure will be transmitted. ([034017d](https://github.com/theNorstroem/FuroBaseComponents/commit/034017de1335c74b18c4a058a3cc3b9bdc532c7b))





## [1.19.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.19.0...@furo/data@1.19.1) (2021-03-12)

**Note:** Version bump only for package @furo/data





# [1.19.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.18.3...@furo/data@1.19.0) (2021-03-03)


### Features

* load rel on collection-agent ([6d8030f](https://github.com/theNorstroem/FuroBaseComponents/commit/6d8030fc2321f5d2a1181719453f7c60a573d9b3))
* load rel on collection-agent ([3c917b3](https://github.com/theNorstroem/FuroBaseComponents/commit/3c917b323b360b595a78438d89ab6f3fe58ec432))





## [1.18.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.18.2...@furo/data@1.18.3) (2021-02-25)

**Note:** Version bump only for package @furo/data





## [1.18.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.18.1...@furo/data@1.18.2) (2021-02-25)

**Note:** Version bump only for package @furo/data





## [1.18.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.18.0...@furo/data@1.18.1) (2021-02-12)


### Bug Fixes

* init invisible components with display:none ([bdf3464](https://github.com/theNorstroem/FuroBaseComponents/commit/bdf3464a946130ced466bf496eed65ee7a9e1709))





# [1.18.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.17.1...@furo/data@1.18.0) (2021-02-09)


### Features

* furo-ui5-header-panel lint and format ([4c6a217](https://github.com/theNorstroem/FuroBaseComponents/commit/4c6a2176bb217a1093d96a3c085b6974d7d7c453))





## [1.17.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.17.0...@furo/data@1.17.1) (2021-02-02)


### Bug Fixes

* treatment of blank values for input fields. Updated demo cases ([f46c8ee](https://github.com/theNorstroem/FuroBaseComponents/commit/f46c8ee39500e8d267726ec5560f48a31bbffae1))
* update segmented-button, bindings and readonly state ([d63ae94](https://github.com/theNorstroem/FuroBaseComponents/commit/d63ae94dd0bdc285d4c5ce8d55bada55a2749d18))





# [1.17.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.16.5...@furo/data@1.17.0) (2021-01-31)


### Features

* add getData method to dataObject. modify demo and test. ([20ec1d8](https://github.com/theNorstroem/FuroBaseComponents/commit/20ec1d8ccd15baf2755c17d220af214d54b382e3))





## [1.16.5](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.16.4...@furo/data@1.16.5) (2021-01-22)

**Note:** Version bump only for package @furo/data





## [1.16.4](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.16.3...@furo/data@1.16.4) (2021-01-18)

**Note:** Version bump only for package @furo/data





## [1.16.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.16.2...@furo/data@1.16.3) (2021-01-12)

**Note:** Version bump only for package @furo/data





## [1.16.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.16.1...@furo/data@1.16.2) (2021-01-12)

**Note:** Version bump only for package @furo/data





## [1.16.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.16.0...@furo/data@1.16.1) (2021-01-05)

**Note:** Version bump only for package @furo/data





# [1.16.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.15.0...@furo/data@1.16.0) (2020-12-24)


### Bug Fixes

* four col layout narrow switches to 2 not to 1. Narrower switches to 1 ([edf3bef](https://github.com/theNorstroem/FuroBaseComponents/commit/edf3befb7638b9f58bc288948781ce19eb2ace35))


### Features

* initial filters ([129cfac](https://github.com/theNorstroem/FuroBaseComponents/commit/129cfac9dc2bc04191e7e182ffe4b2cf60dcf074))





# [1.15.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.14.0...@furo/data@1.15.0) (2020-12-17)


### Bug Fixes

* remove the check for an array on expected input string ([f341694](https://github.com/theNorstroem/FuroBaseComponents/commit/f341694fe9437f5e5911260a89b5024685116131))
* work with data fields which has no binded fields ([ec3faf6](https://github.com/theNorstroem/FuroBaseComponents/commit/ec3faf635d02ec086cba533ab205886e0cc76a1b))


### Features

* base64 encoded data object getter and setter ([397cd7e](https://github.com/theNorstroem/FuroBaseComponents/commit/397cd7e0b2bae3d7e7bd72b5183cf7aed8e5cf33))





# [1.14.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.13.3...@furo/data@1.14.0) (2020-12-10)


### Bug Fixes

* auto-select-first on collection dropdown ([4a416d1](https://github.com/theNorstroem/FuroBaseComponents/commit/4a416d11f91691acfd9395c633ce0f0ad41d671b))
* UniversalFieldNodeBinder.js with mapped labels ([23193a5](https://github.com/theNorstroem/FuroBaseComponents/commit/23193a537cd6196c879991d97eea326309e24e79))


### Features

* new method to inject key value query param object. All existing query params are replaced by the transferred parameters. If the transferred object is empty or undefined, all the values will be removed! ([b21c219](https://github.com/theNorstroem/FuroBaseComponents/commit/b21c219d3243bfbc10826f65a79f86f5f10b7655))





## [1.13.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.13.2...@furo/data@1.13.3) (2020-12-01)

**Note:** Version bump only for package @furo/data





## [1.13.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.13.1...@furo/data@1.13.2) (2020-11-27)


### Bug Fixes

* adding repeater node with an empty string should not set null ([40bfe69](https://github.com/theNorstroem/FuroBaseComponents/commit/40bfe69326746f470a3a56c19c56394a056b81ea))
* search() on collection agent must even search on empty strings ([c17f251](https://github.com/theNorstroem/FuroBaseComponents/commit/c17f251cc6298f46e52eb464195acdf42b4e328f))
* this._updateVirtualNode(field); was to late ([9db4e41](https://github.com/theNorstroem/FuroBaseComponents/commit/9db4e41eac4f493be0c6b9d435f73454d24a6b7d))





## [1.13.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.13.0...@furo/data@1.13.1) (2020-11-24)

**Note:** Version bump only for package @furo/data





# [1.13.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.12.3...@furo/data@1.13.0) (2020-11-20)


### Bug Fixes

* search on collection MUST also search for empty query, when requested ([84a65e8](https://github.com/theNorstroem/FuroBaseComponents/commit/84a65e8771c628b9c5818086b0323dd7ef73601b))
* When a repeated node is added, because the meta says it is a RepeaterNode the children should not be repeated. Set the _meta.repeated on children to false. ([57be9b6](https://github.com/theNorstroem/FuroBaseComponents/commit/57be9b61352bc30309a167e54d02fd5d7436e083))


### Features

* default set on furo.Link types will prefix with api-base-url when it is not hard coded in the specs ([8dc9cd2](https://github.com/theNorstroem/FuroBaseComponents/commit/8dc9cd29557353473c10e725c9e9716374d201fc))





## [1.12.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.12.2...@furo/data@1.12.3) (2020-11-14)


### Bug Fixes

* steps smaller 1 caused always a constraint violation, because of floating point modulo calculations. ([e29823a](https://github.com/theNorstroem/FuroBaseComponents/commit/e29823acf8cddfa77a347acd97fcb3eb77f4b2fd))





## [1.12.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.12.1...@furo/data@1.12.2) (2020-11-14)

**Note:** Version bump only for package @furo/data





## [1.12.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.12.0...@furo/data@1.12.1) (2020-11-12)


### Bug Fixes

* Handling google wrapper types as scalar values, because all (most) servers send them so and expects them so. ([163c20b](https://github.com/theNorstroem/FuroBaseComponents/commit/163c20b6db6ab034fccd76c4337ec457591c6ffc))
* Handling google wrapper types as scalar values, because all (most) servers send them so and expects them so. ([00a9ae3](https://github.com/theNorstroem/FuroBaseComponents/commit/00a9ae33177c27c4dc2fd1ca775554a81b9c0970))





# [1.12.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.11.3...@furo/data@1.12.0) (2020-11-05)


### Features

* support furo.type.Date ([3d8847b](https://github.com/theNorstroem/FuroBaseComponents/commit/3d8847b9b98c5322621f04ccedd220bb132a7147))





## [1.11.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.11.2...@furo/data@1.11.3) (2020-11-04)

**Note:** Version bump only for package @furo/data





## [1.11.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.11.1...@furo/data@1.11.2) (2020-10-30)


### Bug Fixes

* agent should handle errors from gateway v2 ([7ed5052](https://github.com/theNorstroem/FuroBaseComponents/commit/7ed50522295d1253d0ce7976ee1f7a65f999cc9c))
* clear all errors on new data ([86029d7](https://github.com/theNorstroem/FuroBaseComponents/commit/86029d7cc98f6e9c6c50594560802dd84c79c8f9))
* clear all errors on new data ([697f607](https://github.com/theNorstroem/FuroBaseComponents/commit/697f607a6b56e8b634d000ddcf8f638f34c47ebd))
* fire init-completed when init on data-object is finished ([fc8e90e](https://github.com/theNorstroem/FuroBaseComponents/commit/fc8e90ec60872f7586e0d7a89d9de598785bb0f7))





## [1.11.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.11.0...@furo/data@1.11.1) (2020-10-28)

**Note:** Version bump only for package @furo/data





# [1.11.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.10.1...@furo/data@1.11.0) (2020-10-27)


### Features

* entity-agent with optional update_mask query param. Use the attribute with-update-mask to enable ([cae6ce1](https://github.com/theNorstroem/FuroBaseComponents/commit/cae6ce1c87a0fc2993286be7a805a890c3631be8))
* entity-agent with optional update_mask query param. Use the attribute with-update-mask to enable ([4836687](https://github.com/theNorstroem/FuroBaseComponents/commit/48366874ce29418b1d028c8a08e51421f1e278bd))
* entity-agent with optional update_mask query param. Use the attribute with-update-mask to enable ([843a37d](https://github.com/theNorstroem/FuroBaseComponents/commit/843a37d1144259cbf724073186fb36084a32f744))
* entity-agent with optional update_mask query param. Use the attribute with-update-mask to enable ([8741476](https://github.com/theNorstroem/FuroBaseComponents/commit/8741476bed39ce1e4b61f7c2823c969c6ed45bff))





## [1.10.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.10.0...@furo/data@1.10.1) (2020-10-20)


### Bug Fixes

* fix ios8601 format. fix ui5-reference-search in order to show display_name initially when there is no collection-injection ([a2b51e6](https://github.com/theNorstroem/FuroBaseComponents/commit/a2b51e60fba206f0826385bf8ddaf7fd69253ef2))
* fix tests ([20a287f](https://github.com/theNorstroem/FuroBaseComponents/commit/20a287f755c347b28bba2a873b8e5401696bdfe8))





# [1.10.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.9.0...@furo/data@1.10.0) (2020-10-08)


### Bug Fixes

* modify incorrect subfield ([c972081](https://github.com/theNorstroem/FuroBaseComponents/commit/c972081687cb7594dc21a8d7657f90e5ee5d31fd))


### Features

* furo-data-number-input supports google wrapper int type with null value and furo fat int type with empty label. ([009c944](https://github.com/theNorstroem/FuroBaseComponents/commit/009c944dd6bc9c61c9a4cca7fa4eaefbd13b116e))





# [1.9.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.8.0...@furo/data@1.9.0) (2020-09-14)


### Bug Fixes

* fieldoptions.list are not always available ([a94447c](https://github.com/theNorstroem/FuroBaseComponents/commit/a94447cb9ddc7f39adb84998f11dec25fb8c80db))
* furo-filter-field can now handle bindData to set new value ([d3973bc](https://github.com/theNorstroem/FuroBaseComponents/commit/d3973bc8879a02798bf47cf78c068401be59c4ac))


### Features

* furo-filter-field can now handle bindData to set new value ([73f45e4](https://github.com/theNorstroem/FuroBaseComponents/commit/73f45e457311662a56c36e699649c74576fda9fc))





# [1.8.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.7.0...@furo/data@1.8.0) (2020-09-03)


### Features

* query sort_by helper ([a3c9528](https://github.com/theNorstroem/FuroBaseComponents/commit/a3c9528e97613946e78414b2e5da0514b76e33b3))
* sort_by container to use with furo-collection-agent ([a3a5807](https://github.com/theNorstroem/FuroBaseComponents/commit/a3a580787574c8d1a7a5ef44f377fb598cd1f0d8))





# [1.7.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.6.0...@furo/data@1.7.0) (2020-08-27)


### Bug Fixes

* constrains with boolean value should be handled as label ([da6592a](https://github.com/theNorstroem/FuroBaseComponents/commit/da6592afb03baccbfd38452237b0d77d2899fffa))
* dispatch a field-value-changed after repeated node inside of it changed ([73bbff0](https://github.com/theNorstroem/FuroBaseComponents/commit/73bbff059cf9c784f086bea2a8a271836047e1d2))
* dispatch a field-value-changed after repeated node inside of it changed ([c635d8f](https://github.com/theNorstroem/FuroBaseComponents/commit/c635d8f3cfc5e929740ca58b4012cd9da5e48763))
* entity-agent does not modify the original error object ([64930b0](https://github.com/theNorstroem/FuroBaseComponents/commit/64930b0e99eab59475235f35fd68937f44fb1382))
* fix tests ([995126d](https://github.com/theNorstroem/FuroBaseComponents/commit/995126d1ba3501e0dc47b2b3f26d615c3be3582e))
* meta updates on all types ([f0fdd71](https://github.com/theNorstroem/FuroBaseComponents/commit/f0fdd71c453311d1e6c6b41dcdf91563973ae1d4))
* qp-changer fires to much ([3ac8d42](https://github.com/theNorstroem/FuroBaseComponents/commit/3ac8d42d686d844af5c6eea48f0053a5cdcbdd3b))
* set null on removed attributes on target ([f44d065](https://github.com/theNorstroem/FuroBaseComponents/commit/f44d065e84a438745b10880bdf27d9abef518c32))
* set null on removed attributes on target ([3d276f0](https://github.com/theNorstroem/FuroBaseComponents/commit/3d276f0bccfbfe86bf8848596bfc436d4e9ca8d7))
* UniversalFieldNodeBinder should also work with other complex types like furo.reference and google.type.date etc. ([8156ca3](https://github.com/theNorstroem/FuroBaseComponents/commit/8156ca38779a8f2cb8862775545163d9e8add8de))
* update target value only by fat, wrapper and scalar type ([5e5fab4](https://github.com/theNorstroem/FuroBaseComponents/commit/5e5fab4187818ebe5b79f4fd8516d0e7d59c9b5e))
* update the field constraints based on fat attributes only if not scalar ([7c30280](https://github.com/theNorstroem/FuroBaseComponents/commit/7c30280b0b641f7a42e7d4863a31478cc6a4e9f9))


### Features

* add and remove attributes on fat types and fallback on scalar and wrapper ([68969fc](https://github.com/theNorstroem/FuroBaseComponents/commit/68969fc6163321e60296eb8a3bad1ccc356c7e74))
* add and remove labels on fat types and fallback on scalar and wrapper ([7fc7b8e](https://github.com/theNorstroem/FuroBaseComponents/commit/7fc7b8ef3fb124b7324b3f524d4c0935b3f847b1))
* add furo-ui5-data-date-picker ([bf64988](https://github.com/theNorstroem/FuroBaseComponents/commit/bf6498844444fd3ba588b3da06a91009d067ba7e))
* DataObject with deep fieldnode metas ([1bb165d](https://github.com/theNorstroem/FuroBaseComponents/commit/1bb165d38252cfa5e878209eb8f763ee6a36f49a))
* deep constraints with subfield.max in fat attributes ([c35d268](https://github.com/theNorstroem/FuroBaseComponents/commit/c35d268dda2e4cf8df39af8ef3cc6f6b4495e4f3))
* deep constraints with subfield.max in Specs ([4a0ae85](https://github.com/theNorstroem/FuroBaseComponents/commit/4a0ae855ea01a7d26b07190f91deec716980b3eb))
* furo-data-text input with universal bindings ([8d27df0](https://github.com/theNorstroem/FuroBaseComponents/commit/8d27df0d4c3c610549c393c168a6442283bc62c6))
* initial lib ([e9d6d1d](https://github.com/theNorstroem/FuroBaseComponents/commit/e9d6d1d4ca77b98ab33b9ffd57cb86d5ae4f7ec9))
* labels for empty and pristine ([1ad72b9](https://github.com/theNorstroem/FuroBaseComponents/commit/1ad72b953c7a1783083d142157995f25617c0f7c))
* number input ([c6fbc56](https://github.com/theNorstroem/FuroBaseComponents/commit/c6fbc566e4d72a85bbe9070ba90e099d339bc617))
* number input ([8837c61](https://github.com/theNorstroem/FuroBaseComponents/commit/8837c614861258aceaac05353ab18ca8388d8c96))
* reading scalar, wrapper and fat types ([aaff7e0](https://github.com/theNorstroem/FuroBaseComponents/commit/aaff7e0e49d1b5e3beaa24eee1d1b33a94d795db))
* text input ([ce24d31](https://github.com/theNorstroem/FuroBaseComponents/commit/ce24d31786fefa51954291368f6de8e345da3f59))
* ui5-data-property ([3da649d](https://github.com/theNorstroem/FuroBaseComponents/commit/3da649d9d8d5535aa2b011785905f88ff061dd22))
* update fieldNode value ([d70e0f0](https://github.com/theNorstroem/FuroBaseComponents/commit/d70e0f083ffb232700c85c99754718d45507a5c8))
* update fieldNode value on scalar and wrappers too ([ea8ba7a](https://github.com/theNorstroem/FuroBaseComponents/commit/ea8ba7a47b763404600d554324d3f92547478675))
* update labels on fat types ([c3654f4](https://github.com/theNorstroem/FuroBaseComponents/commit/c3654f4de9cbef717655854304a00b4301eb5ac9))





# [1.6.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.5.0...@furo/data@1.6.0) (2020-08-11)


### Bug Fixes

* data-changed-after-inject with multiple injection phases ([caa8bf2](https://github.com/theNorstroem/FuroBaseComponents/commit/caa8bf2210947bc5e53e26d1019bba5d4f856ae5))
* data-changed-after-inject with multiple injection phases ([c84bc39](https://github.com/theNorstroem/FuroBaseComponents/commit/c84bc39626c0a326ca690583f9db6dfebb127e76))
* data-changed-after-inject with multiple injection phases ([e63149d](https://github.com/theNorstroem/FuroBaseComponents/commit/e63149d303079dec3fbd09beddb3b0f801992ac3))
* invalid test case removed ([839d802](https://github.com/theNorstroem/FuroBaseComponents/commit/839d8024c039692d00368f83f39961351a9defe3))
* update pristine on nested repeated fields ([b8f3e3c](https://github.com/theNorstroem/FuroBaseComponents/commit/b8f3e3cda1aca5cece5ab12250a9bd4279b4b213))
* update_mask according to https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto ([5aa7f76](https://github.com/theNorstroem/FuroBaseComponents/commit/5aa7f76fdacc147d4c811b8972abdd09f229bcea))


### Features

* first litter for the new UI5 package ([88b440f](https://github.com/theNorstroem/FuroBaseComponents/commit/88b440fa56e7ba2ccbce208c0276e195082e833b))





# [1.5.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.4.3...@furo/data@1.5.0) (2020-07-31)


### Bug Fixes

* test response slightly changed ([251856d](https://github.com/theNorstroem/FuroBaseComponents/commit/251856d9ca1887d425920440728dc77a203add34))


### Features

* add query param support in entity-agent and custom-method. the request type in custom method service spec doesn't need to be changed because of backward compatibility. therefore the template of proto generator is also not changed. ([b133da8](https://github.com/theNorstroem/FuroBaseComponents/commit/b133da8d274afa0aa1c685e2abf1b3b4aaca9657))
* generate enum in data environment ([a17bc66](https://github.com/theNorstroem/FuroBaseComponents/commit/a17bc663649708ae33e8423247a8fc4dbd1660ef))
* give a hint when by requesting with the query param which is not defined in the spec. ([205e5b8](https://github.com/theNorstroem/FuroBaseComponents/commit/205e5b8262e9c07a4e26e030b55f4dd3f6ef321c))
* refactoring checkQueryParam ([b719007](https://github.com/theNorstroem/FuroBaseComponents/commit/b719007d5718085947a584b65f730088eeab678e))





## [1.4.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.4.2...@furo/data@1.4.3) (2020-06-29)

**Note:** Version bump only for package @furo/data





## [1.4.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.4.1...@furo/data@1.4.2) (2020-06-29)

**Note:** Version bump only for package @furo/data





## [1.4.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.4.0...@furo/data@1.4.1) (2020-06-22)


### Bug Fixes

* fields named "value" on root objects ([bc68ba6](https://github.com/theNorstroem/FuroBaseComponents/commit/bc68ba6915757a0f6ec7882940445786a814353c))
* test flow changed ([ce96835](https://github.com/theNorstroem/FuroBaseComponents/commit/ce96835cb76250424e58cbb66a9a8d45d7f62c01))





# [1.4.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.14...@furo/data@1.4.0) (2020-06-16)


### Features

* complex objects ([14307ca](https://github.com/theNorstroem/FuroBaseComponents/commit/14307ca1151293374c4bc9d98103bab6e7ef6bcd))
* data-object with oneof support ([f6cf2cb](https://github.com/theNorstroem/FuroBaseComponents/commit/f6cf2cb87b7dee77737f6a81a0a6b2c280a8c678))
* do not send values from oneof group ([18463c2](https://github.com/theNorstroem/FuroBaseComponents/commit/18463c246ebc4af95d55f931b9255724b7f92776))
* do not send values from oneof group ([391de4e](https://github.com/theNorstroem/FuroBaseComponents/commit/391de4e3b43323470fe96fe50fa3ba621cc2e094))





## [1.3.14](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.13...@furo/data@1.3.14) (2020-06-08)


### Bug Fixes

* agents and custom method should work with camel-case method name ([67779b6](https://github.com/theNorstroem/FuroBaseComponents/commit/67779b695caadf57dfccd31768bb16b8097ccfe6))
* mapping pre, next, last, firs list method to get in collection agent ([cd80278](https://github.com/theNorstroem/FuroBaseComponents/commit/cd80278ecfa37e3010ef096c9fb13745a640fbba))
* remove self mapping in collection agent. ([89beec3](https://github.com/theNorstroem/FuroBaseComponents/commit/89beec3c34b29d1d46ef192841586831edfd0925))





## [1.3.13](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.12...@furo/data@1.3.13) (2020-06-04)


### Bug Fixes

* correct handling of request headers accept and content-type ([14ede22](https://github.com/theNorstroem/FuroBaseComponents/commit/14ede22e96bf3a00cc56c002011c0434aae6937d))
* request header content-type should be provided, if a body is sent ([3090a0a](https://github.com/theNorstroem/FuroBaseComponents/commit/3090a0aed4491239d6a0635c28ee14afc2f35721))





## [1.3.12](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.11...@furo/data@1.3.12) (2020-05-15)


### Bug Fixes

* field node should also work with the meta with `data.data` in repeated field ([6c0930b](https://github.com/theNorstroem/FuroBaseComponents/commit/6c0930b94b5183385cf6a2a89547f3086d0176c9))





## [1.3.11](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.10...@furo/data@1.3.11) (2020-05-13)


### Bug Fixes

* meta changes should be notified to all subfields ([5e0de87](https://github.com/theNorstroem/FuroBaseComponents/commit/5e0de875efe4858b988616fcfd8a2217097b1716))





## [1.3.10](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.9...@furo/data@1.3.10) (2020-05-12)


### Bug Fixes

* it's possible to set meta from response on top level. E.g. meta on field data ([8dfcf24](https://github.com/theNorstroem/FuroBaseComponents/commit/8dfcf243dca3cf44eb9e8d007e2cccf2d911d7e5))





## [1.3.9](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.8...@furo/data@1.3.9) (2020-05-01)

**Note:** Version bump only for package @furo/data





## [1.3.8](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.7...@furo/data@1.3.8) (2020-04-29)


### Bug Fixes

* FieldNode required constraint validator should not be triggered if FieldNode has readonly-is-true flag ([b428ccb](https://github.com/theNorstroem/FuroBaseComponents/commit/b428ccb1f8062fdc87135eb8c966d1ee071e47e4))
* No readonly fields are validated. ([c9b01e9](https://github.com/theNorstroem/FuroBaseComponents/commit/c9b01e9a76b58d8819748558d531c96a682dd812))





## [1.3.7](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.6...@furo/data@1.3.7) (2020-04-29)


### Bug Fixes

* charset utf-8 added to all agents ([dd8fc85](https://github.com/theNorstroem/FuroBaseComponents/commit/dd8fc85aa5f86f6aed6ba27cd84ea489238ac9cf))
* content-type should one once applied according to https://tools.ietf.org/html/rfc7231#section-3.1.1.5 ([0b0a01c](https://github.com/theNorstroem/FuroBaseComponents/commit/0b0a01cdcd91946a41b4472af505a899fc9c9c6b)), closes [/tools.ietf.org/html/rfc7231#section-3](https://github.com//tools.ietf.org/html/rfc7231/issues/section-3)
* custom-method should have the same behaviour ([9c7cfad](https://github.com/theNorstroem/FuroBaseComponents/commit/9c7cfadd5715472f2a70fddd7d1be1f1ca234adc))





## [1.3.6](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.5...@furo/data@1.3.6) (2020-04-24)

**Note:** Version bump only for package @furo/data





## [1.3.5](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.4...@furo/data@1.3.5) (2020-04-22)

**Note:** Version bump only for package @furo/data





## [1.3.4](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.3...@furo/data@1.3.4) (2020-04-21)

**Note:** Version bump only for package @furo/data





## [1.3.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.2...@furo/data@1.3.3) (2020-04-20)

**Note:** Version bump only for package @furo/data





## [1.3.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.1...@furo/data@1.3.2) (2020-04-20)

**Note:** Version bump only for package @furo/data





## [1.3.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@1.3.0...@furo/data@1.3.1) (2020-04-20)


### Bug Fixes

* lerna problems ([ef9d1c4](https://github.com/theNorstroem/FuroBaseComponents/commit/ef9d1c405fbf55664ef05e6f12a1e7eecfc53759))





## [0.72.5](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.72.4...@furo/data@0.72.5) (2020-04-03)

**Note:** Version bump only for package @furo/data





## [0.72.4](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.72.3...@furo/data@0.72.4) (2020-04-03)

**Note:** Version bump only for package @furo/data





## [0.72.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.72.2...@furo/data@0.72.3) (2020-04-03)


### Bug Fixes

* method PATCH should transmit required fields inside of deep repeated structure ([5a9f87a](https://github.com/theNorstroem/FuroBaseComponents/commit/5a9f87a))





## [0.72.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.72.1...@furo/data@0.72.2) (2020-03-29)

**Note:** Version bump only for package @furo/data





## [0.72.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.72.0...@furo/data@0.72.1) (2020-03-27)


### Bug Fixes

* meta information from response should be applied before meta information from api spec ([1a42fac](https://github.com/theNorstroem/FuroBaseComponents/commit/1a42fac))





# [0.72.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.71.0...@furo/data@0.72.0) (2020-03-26)


### Features

* furo-data-context-menu tests are working again ([8448896](https://github.com/theNorstroem/FuroBaseComponents/commit/8448896))





# [0.71.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.8...@furo/data@0.71.0) (2020-03-11)


### Bug Fixes

* deleting map types ([8132a48](https://github.com/theNorstroem/FuroBaseComponents/commit/8132a48))


### Features

* api prefixes for apis which are relative to the apps directory ([c861499](https://github.com/theNorstroem/FuroBaseComponents/commit/c861499))
* prefixes for apis ([3036882](https://github.com/theNorstroem/FuroBaseComponents/commit/3036882))





## [0.70.8](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.7...@furo/data@0.70.8) (2020-03-10)

**Note:** Version bump only for package @furo/data





## [0.70.7](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.6...@furo/data@0.70.7) (2020-03-07)

**Note:** Version bump only for package @furo/data





## [0.70.6](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.5...@furo/data@0.70.6) (2020-03-07)


### Bug Fixes

* query params are now fully describable in the service api specification. ([975f542](https://github.com/theNorstroem/FuroBaseComponents/commit/975f542))





## [0.70.5](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.4...@furo/data@0.70.5) (2020-02-19)

**Note:** Version bump only for package @furo/data





## [0.70.4](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.3...@furo/data@0.70.4) (2020-02-18)

**Note:** Version bump only for package @furo/data





## [0.70.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.2...@furo/data@0.70.3) (2020-02-18)


### Bug Fixes

* parse based on response header content-type ([b4f3417](https://github.com/theNorstroem/FuroBaseComponents/commit/b4f3417))
* parse based on response header content-type ([6d000a6](https://github.com/theNorstroem/FuroBaseComponents/commit/6d000a6))





## [0.70.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.1...@furo/data@0.70.2) (2020-02-12)

**Note:** Version bump only for package @furo/data





## [0.70.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.70.0...@furo/data@0.70.1) (2020-02-11)


### Bug Fixes

* response-error events must be fired regardless of the content-type. ([994110b](https://github.com/theNorstroem/FuroBaseComponents/commit/994110b))





# [0.70.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.68.0...@furo/data@0.70.0) (2020-02-09)


### Features

* data-object emits data-changed-after-inject ([605c4f5](https://github.com/theNorstroem/FuroBaseComponents/commit/605c4f5))





# [0.69.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.68.0...@furo/data@0.69.0) (2020-02-09)


### Features

* data-object emits data-changed-after-inject ([605c4f5](https://github.com/theNorstroem/FuroBaseComponents/commit/605c4f5))





# [0.68.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.67.0...@furo/data@0.68.0) (2020-02-07)


### Bug Fixes

* flow repeat in shady dom, yes shady ([9c839be](https://github.com/theNorstroem/FuroBaseComponents/commit/9c839be))
* update_mask with deep object paths. ([58fa857](https://github.com/theNorstroem/FuroBaseComponents/commit/58fa857))


### Features

* inherited readonly ([5f47864](https://github.com/theNorstroem/FuroBaseComponents/commit/5f47864))





# [0.67.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.66.1...@furo/data@0.67.0) (2020-02-04)


### Bug Fixes

* catch invalid meta ([de87ff9](https://github.com/theNorstroem/FuroBaseComponents/commit/de87ff9))
* removing a eventlistener killed all other listeners ([7f14423](https://github.com/theNorstroem/FuroBaseComponents/commit/7f14423))


### Features

* furo-data-object export added ([a8ce90f](https://github.com/theNorstroem/FuroBaseComponents/commit/a8ce90f))
* move positions of items ([e955076](https://github.com/theNorstroem/FuroBaseComponents/commit/e955076))
* notify move of items ([c9ee384](https://github.com/theNorstroem/FuroBaseComponents/commit/c9ee384))
* Race condition by multiple requests by the same agent. Pending requests are aborted. ([2b7803c](https://github.com/theNorstroem/FuroBaseComponents/commit/2b7803c))





## [0.66.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.66.0...@furo/data@0.66.1) (2020-01-14)


### Bug Fixes

* clasname for css theme injecter ([28d0415](https://github.com/theNorstroem/FuroBaseComponents/commit/28d0415))





# [0.66.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.65.0...@furo/data@0.66.0) (2019-12-17)


### Features

* class extending ([3fc32d7](https://github.com/theNorstroem/FuroBaseComponents/commit/3fc32d7))





# [0.65.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.64.3...@furo/data@0.65.0) (2019-12-12)


### Features

* add no-result-hint for reference-search ([e07acc4](https://github.com/theNorstroem/FuroBaseComponents/commit/e07acc4))





## [0.64.3](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.64.2...@furo/data@0.64.3) (2019-12-10)


### Bug Fixes

* data objects which gets smaller clears the data ([86c6cdf](https://github.com/theNorstroem/FuroBaseComponents/commit/86c6cdf))





## [0.64.2](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.64.0...@furo/data@0.64.2) (2019-12-02)


### Bug Fixes

* clear on reference-search will clear the binded data ([ffc43b7](https://github.com/theNorstroem/FuroBaseComponents/commit/ffc43b7))





## [0.64.1](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.64.0...@furo/data@0.64.1) (2019-11-28)


### Bug Fixes

* clear on reference-search will clear the binded data ([ffc43b7](https://github.com/theNorstroem/FuroBaseComponents/commit/ffc43b7))





# [0.64.0](https://github.com/theNorstroem/FuroBaseComponents/compare/@furo/data@0.63.1...@furo/data@0.64.0) (2019-11-15)


### Bug Fixes

* show error message in input component ([1fe4b0a](https://github.com/theNorstroem/FuroBaseComponents/commit/1fe4b0a))


### Features

* check for required fields ([afb7fa9](https://github.com/theNorstroem/FuroBaseComponents/commit/afb7fa9))
* check for required fields ([8e13517](https://github.com/theNorstroem/FuroBaseComponents/commit/8e13517))





## [0.63.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.63.0...@furo/data@0.63.1) (2019-11-13)

**Note:** Version bump only for package @furo/data





# [0.63.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.62.3...@furo/data@0.63.0) (2019-11-08)


### Bug Fixes

* empty required repeated field should not be transmitted ([854ea69](https://github.com/veith/FuroBaseComponents/commit/854ea69))
* Optimization of the data transport volume ([71605be](https://github.com/veith/FuroBaseComponents/commit/71605be))
* renaming ([70e1b52](https://github.com/veith/FuroBaseComponents/commit/70e1b52))
* repeats and __childNodes should have the same size ([0716212](https://github.com/veith/FuroBaseComponents/commit/0716212))
* untouched empty repeated fields should no be transmitted ([a50544a](https://github.com/veith/FuroBaseComponents/commit/a50544a))


### Features

* defaults according to proto ([15d2f7a](https://github.com/veith/FuroBaseComponents/commit/15d2f7a))
* how to build the filter pattern (demo included) ([3786f2b](https://github.com/veith/FuroBaseComponents/commit/3786f2b))





## [0.62.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.62.2...@furo/data@0.62.3) (2019-10-31)


### Bug Fixes

* furo.Property reloads ([453acaf](https://github.com/veith/FuroBaseComponents/commit/453acaf))





## [0.62.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.62.1...@furo/data@0.62.2) (2019-10-29)

**Note:** Version bump only for package @furo/data





## [0.62.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.62.0...@furo/data@0.62.1) (2019-10-28)


### Bug Fixes

* _value on dataObject ([51ab6e0](https://github.com/veith/FuroBaseComponents/commit/51ab6e0))





# [0.62.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.61.2...@furo/data@0.62.0) (2019-10-25)


### Features

* Environment option to enable sending all data on PUT. ([8e470d0](https://github.com/veith/FuroBaseComponents/commit/8e470d0))
* use defaults only on init of a data object ([563d811](https://github.com/veith/FuroBaseComponents/commit/563d811))





## [0.61.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.61.1...@furo/data@0.61.2) (2019-10-23)

**Note:** Version bump only for package @furo/data





## [0.61.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.61.0...@furo/data@0.61.1) (2019-10-21)

**Note:** Version bump only for package @furo/data





# [0.61.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.60.1...@furo/data@0.61.0) (2019-10-18)


### Features

* furo-data-repeat hides itself when data is empty ([939c3af](https://github.com/veith/FuroBaseComponents/commit/939c3af))





## [0.60.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.60.0...@furo/data@0.60.1) (2019-10-15)

**Note:** Version bump only for package @furo/data





# [0.60.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.59.1...@furo/data@0.60.0) (2019-10-10)


### Features

* attributes can now be named with *value* ([58d5954](https://github.com/veith/FuroBaseComponents/commit/58d5954))





## [0.59.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.59.0...@furo/data@0.59.1) (2019-10-06)

**Note:** Version bump only for package @furo/data





# [0.59.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.58.6...@furo/data@0.59.0) (2019-10-04)


### Bug Fixes

* furo-data-object init ([bb65e9c](https://github.com/veith/FuroBaseComponents/commit/bb65e9c))


### Features

* clearing field nodes, respect the specified default values ([b10ea06](https://github.com/veith/FuroBaseComponents/commit/b10ea06))
* clearing repeated nodes, respect the specified default values ([0f958f4](https://github.com/veith/FuroBaseComponents/commit/0f958f4))





## [0.58.6](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.58.5...@furo/data@0.58.6) (2019-10-03)


### Bug Fixes

* **furo-data:** replace pattern after regex exec in furo-reverse-deep-link ([1b98ade](https://github.com/veith/FuroBaseComponents/commit/1b98ade))
* clear repeated fields when unexistend data comes in ([b363986](https://github.com/veith/FuroBaseComponents/commit/b363986))





## [0.58.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.58.4...@furo/data@0.58.5) (2019-10-03)


### Bug Fixes

* meta updates, error in furo-data-date-input without constraints ([ec7de2f](https://github.com/veith/FuroBaseComponents/commit/ec7de2f))





## [0.58.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.58.3...@furo/data@0.58.4) (2019-10-03)

**Note:** Version bump only for package @furo/data





## [0.58.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.58.2...@furo/data@0.58.3) (2019-10-02)


### Bug Fixes

* typo in props and repeater ([923a3fc](https://github.com/veith/FuroBaseComponents/commit/923a3fc))





## [0.58.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.58.1...@furo/data@0.58.2) (2019-10-01)


### Bug Fixes

* duplicate entries on repeated data-property ([3c54eb7](https://github.com/veith/FuroBaseComponents/commit/3c54eb7))





## [0.58.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.58.0...@furo/data@0.58.1) (2019-10-01)

**Note:** Version bump only for package @furo/data





# [0.58.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.57.1...@furo/data@0.58.0) (2019-10-01)


### Features

* overrides on elements without data-binding ([4eb08f0](https://github.com/veith/FuroBaseComponents/commit/4eb08f0))





## [0.57.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.57.0...@furo/data@0.57.1) (2019-09-30)


### Bug Fixes

* repeat should only bind once ([6f4cc27](https://github.com/veith/FuroBaseComponents/commit/6f4cc27))





# [0.57.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.56.1...@furo/data@0.57.0) (2019-09-30)


### Bug Fixes

* check for null values in vendor types ([0ce5a8e](https://github.com/veith/FuroBaseComponents/commit/0ce5a8e))


### Features

* furo-data-emmiter component added ([00e5766](https://github.com/veith/FuroBaseComponents/commit/00e5766))
* new base types ([f8896c6](https://github.com/veith/FuroBaseComponents/commit/f8896c6))





## [0.56.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.56.0...@furo/data@0.56.1) (2019-09-25)


### Bug Fixes

* type Any ([a45930d](https://github.com/veith/FuroBaseComponents/commit/a45930d))





# [0.56.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.55.2...@furo/data@0.56.0) (2019-09-19)


### Features

* data-repeater ([c2f6d12](https://github.com/veith/FuroBaseComponents/commit/c2f6d12))





## [0.55.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.55.1...@furo/data@0.55.2) (2019-09-18)


### Bug Fixes

* fix repeat field changed event for furo.property ([73428a8](https://github.com/veith/FuroBaseComponents/commit/73428a8))





## [0.55.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.55.0...@furo/data@0.55.1) (2019-09-17)

**Note:** Version bump only for package @furo/data





# [0.55.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.54.0...@furo/data@0.55.0) (2019-09-17)


### Bug Fixes

* better null checking by scalar values ([ad59699](https://github.com/veith/FuroBaseComponents/commit/ad59699))


### Features

* property type ([fcfdc34](https://github.com/veith/FuroBaseComponents/commit/fcfdc34))





# [0.54.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.53.1...@furo/data@0.54.0) (2019-09-15)


### Bug Fixes

* ref search ([f267c97](https://github.com/veith/FuroBaseComponents/commit/f267c97))


### Features

* using recursive types is now possible ([e27354a](https://github.com/veith/FuroBaseComponents/commit/e27354a))





## [0.53.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.53.0...@furo/data@0.53.1) (2019-09-11)

**Note:** Version bump only for package @furo/data





# [0.53.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.52.2...@furo/data@0.53.0) (2019-09-11)


### Features

* entity-agent put ([c9ba6ec](https://github.com/veith/FuroBaseComponents/commit/c9ba6ec))





## [0.52.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.52.1...@furo/data@0.52.2) (2019-09-08)

**Note:** Version bump only for package @furo/data





## [0.52.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.52.0...@furo/data@0.52.1) (2019-09-05)


### Bug Fixes

* create request data ([f26bafd](https://github.com/veith/FuroBaseComponents/commit/f26bafd))





# [0.52.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.51.0...@furo/data@0.52.0) (2019-09-05)


### Bug Fixes

* create ([7418cfa](https://github.com/veith/FuroBaseComponents/commit/7418cfa))
* data-object meta dereferenced from spec meta ([475a8cb](https://github.com/veith/FuroBaseComponents/commit/475a8cb))
* data-object meta dereferenced from spec meta ([f8bd7bf](https://github.com/veith/FuroBaseComponents/commit/f8bd7bf))
* data-object meta dereferenced from spec meta ([9f32d4f](https://github.com/veith/FuroBaseComponents/commit/9f32d4f))
* error message changed to description, like it is used in google status protobuf ([03a5b83](https://github.com/veith/FuroBaseComponents/commit/03a5b83))
* fix mockdata and furo-api-fetch-test ([62398dc](https://github.com/veith/FuroBaseComponents/commit/62398dc))
* no translation needed, spec is already translated ([5d034dc](https://github.com/veith/FuroBaseComponents/commit/5d034dc))


### Features

* apply meta, options, constraints from the server to override specs ([bff3542](https://github.com/veith/FuroBaseComponents/commit/bff3542))





# [0.51.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.50.2...@furo/data@0.51.0) (2019-08-30)


### Bug Fixes

* rename deprecated types and services ([fed08cb](https://github.com/veith/FuroBaseComponents/commit/fed08cb))


### Features

* tree with qp and qp-change-request ([5fe9e10](https://github.com/veith/FuroBaseComponents/commit/5fe9e10))





## [0.50.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.50.1...@furo/data@0.50.2) (2019-08-19)


### Bug Fixes

* this-repeated-field-changed ([ecfdb8b](https://github.com/veith/FuroBaseComponents/commit/ecfdb8b))





## [0.50.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.50.0...@furo/data@0.50.1) (2019-08-19)


### Bug Fixes

* lifecycle property with better checks ([9af2f9e](https://github.com/veith/FuroBaseComponents/commit/9af2f9e))
* lifecycle property with better checks ([3e75ff5](https://github.com/veith/FuroBaseComponents/commit/3e75ff5))





# [0.50.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.49.3...@furo/data@0.50.0) (2019-08-17)


### Features

* notification for repeater nodes ([3b59949](https://github.com/veith/FuroBaseComponents/commit/3b59949))





## [0.49.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.49.2...@furo/data@0.49.3) (2019-08-12)

**Note:** Version bump only for package @furo/data





## [0.49.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.49.1...@furo/data@0.49.2) (2019-08-10)


### Bug Fixes

* furo-***-input label position ([4ee5d1d](https://github.com/veith/FuroBaseComponents/commit/4ee5d1d))





## [0.49.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.49.0...@furo/data@0.49.1) (2019-08-10)

**Note:** Version bump only for package @furo/data





# [0.49.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.48.2...@furo/data@0.49.0) (2019-08-07)


### Features

* testing ([7428896](https://github.com/veith/FuroBaseComponents/commit/7428896))





## [0.48.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.48.1...@furo/data@0.48.2) (2019-08-05)

**Note:** Version bump only for package @furo/data





## [0.48.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.48.0...@furo/data@0.48.1) (2019-08-03)

**Note:** Version bump only for package @furo/data





# [0.48.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.47.0...@furo/data@0.48.0) (2019-08-02)


### Features

* furo-data-number-input with furo-number-input ([230e7cd](https://github.com/veith/FuroBaseComponents/commit/230e7cd))





# [0.47.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.46.1...@furo/data@0.47.0) (2019-08-01)


### Features

* furo-data-text-input with furo-data-input ([f1000fc](https://github.com/veith/FuroBaseComponents/commit/f1000fc))
* furo-data-text-input with furo-data-input ([d122143](https://github.com/veith/FuroBaseComponents/commit/d122143))
* separation of furo-input and furo-data-input ([fabf35c](https://github.com/veith/FuroBaseComponents/commit/fabf35c))





## [0.46.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.46.0...@furo/data@0.46.1) (2019-08-01)


### Bug Fixes

* entity object fires details on data-injected ([1533220](https://github.com/veith/FuroBaseComponents/commit/1533220))
* make __fbpReady non private => _FBPReady ([042155c](https://github.com/veith/FuroBaseComponents/commit/042155c))





# [0.46.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.45.5...@furo/data@0.46.0) (2019-07-30)


### Features

* furo-component-page ([37c9078](https://github.com/veith/FuroBaseComponents/commit/37c9078))





## [0.45.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.45.4...@furo/data@0.45.5) (2019-07-30)

**Note:** Version bump only for package @furo/data





## [0.45.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.45.3...@furo/data@0.45.4) (2019-07-28)

**Note:** Version bump only for package @furo/data





## [0.45.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.45.2...@furo/data@0.45.3) (2019-07-28)

**Note:** Version bump only for package @furo/data





## [0.45.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.45.1...@furo/data@0.45.2) (2019-07-25)

**Note:** Version bump only for package @furo/data





## [0.45.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.45.0...@furo/data@0.45.1) (2019-07-22)


### Bug Fixes

* this.field.set ([352ec23](https://github.com/veith/FuroBaseComponents/commit/352ec23))





# [0.45.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.44.1...@furo/data@0.45.0) (2019-07-19)


### Features

* Spec type spec init ([0a9b4ce](https://github.com/veith/FuroBaseComponents/commit/0a9b4ce))
* Spec type spec init ([147aba0](https://github.com/veith/FuroBaseComponents/commit/147aba0))





## [0.44.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.44.0...@furo/data@0.44.1) (2019-07-18)

**Note:** Version bump only for package @furo/data





# [0.44.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.43.0...@furo/data@0.44.0) (2019-07-18)


### Features

* furo demo viewer class viewer ([ce6755f](https://github.com/veith/FuroBaseComponents/commit/ce6755f))
* furo demo viewer class viewer init ([9760015](https://github.com/veith/FuroBaseComponents/commit/9760015))





# [0.43.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.42.1...@furo/data@0.43.0) (2019-07-18)


### Bug Fixes

* events on nested entities (trees) ([e30d98c](https://github.com/veith/FuroBaseComponents/commit/e30d98c))
* tests ([77d8141](https://github.com/veith/FuroBaseComponents/commit/77d8141))


### Features

* type any with type creation ([740e4b8](https://github.com/veith/FuroBaseComponents/commit/740e4b8))





## [0.42.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.42.0...@furo/data@0.42.1) (2019-07-16)

**Note:** Version bump only for package @furo/data





# [0.42.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.41.1...@furo/data@0.42.0) (2019-07-16)


### Features

* furo markdown with prism highlighter ([15b5774](https://github.com/veith/FuroBaseComponents/commit/15b5774))
* Nodes removable ([6d3fc01](https://github.com/veith/FuroBaseComponents/commit/6d3fc01))
* remove polymer deps ([5b7272e](https://github.com/veith/FuroBaseComponents/commit/5b7272e))
* type any and map ([a017e51](https://github.com/veith/FuroBaseComponents/commit/a017e51))





## [0.41.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.41.0...@furo/data@0.41.1) (2019-07-12)

**Note:** Version bump only for package @furo/data





# [0.41.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.40.2...@furo/data@0.41.0) (2019-07-12)


### Features

* repeats with identity do not need a redraw ([9f44402](https://github.com/veith/FuroBaseComponents/commit/9f44402))
* repeats with identity do not need a redraw ([4841cb3](https://github.com/veith/FuroBaseComponents/commit/4841cb3))





## [0.40.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.40.1...@furo/data@0.40.2) (2019-07-11)

**Note:** Version bump only for package @furo/data





## [0.40.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.40.0...@furo/data@0.40.1) (2019-07-09)

**Note:** Version bump only for package @furo/data





# [0.40.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.39.0...@furo/data@0.40.0) (2019-07-05)


### Features

* mini search engine in tree ([62d9d52](https://github.com/veith/FuroBaseComponents/commit/62d9d52))





# [0.39.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.38.6...@furo/data@0.39.0) (2019-07-03)


### Features

* furo-entity-agents accepts plain link object in hts-in ([beec62e](https://github.com/veith/FuroBaseComponents/commit/beec62e))





## [0.38.6](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.38.5...@furo/data@0.38.6) (2019-07-02)

**Note:** Version bump only for package @furo/data





## [0.38.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.38.4...@furo/data@0.38.5) (2019-07-01)


### Bug Fixes

* initial readonly from spec ([2541014](https://github.com/veith/FuroBaseComponents/commit/2541014))





## [0.38.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.38.3...@furo/data@0.38.4) (2019-07-01)


### Bug Fixes

* baseInput setter ([e64f07d](https://github.com/veith/FuroBaseComponents/commit/e64f07d))





## [0.38.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.38.2...@furo/data@0.38.3) (2019-07-01)

**Note:** Version bump only for package @furo/data





## [0.38.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.38.1...@furo/data@0.38.2) (2019-06-27)

**Note:** Version bump only for package @furo/data





## [0.38.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.38.0...@furo/data@0.38.1) (2019-06-27)

**Note:** Version bump only for package @furo/data





# [0.38.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.37.0...@furo/data@0.38.0) (2019-06-21)


### Features

* FuroBaseIcons ([1df13b1](https://github.com/veith/FuroBaseComponents/commit/1df13b1))





# [0.37.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.36.2...@furo/data@0.37.0) (2019-06-21)


### Bug Fixes

*  expand behaviour ([1a45f27](https://github.com/veith/FuroBaseComponents/commit/1a45f27))
*  select root node ([2c203a6](https://github.com/veith/FuroBaseComponents/commit/2c203a6))


### Features

* add repeated node with optional data, check for existing keys ([20a6de0](https://github.com/veith/FuroBaseComponents/commit/20a6de0))
* furo-tree ([56445af](https://github.com/veith/FuroBaseComponents/commit/56445af))





## [0.36.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.36.1...@furo/data@0.36.2) (2019-06-13)


### Bug Fixes

* flow-repeat => template is="flow-repeat" ([56b9f27](https://github.com/veith/FuroBaseComponents/commit/56b9f27))





## [0.36.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.36.0...@furo/data@0.36.1) (2019-06-12)

**Note:** Version bump only for package @furo/data





# [0.36.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.35.0...@furo/data@0.36.0) (2019-06-11)


### Features

* furo-deep-link without qp (for root elements,...) ([d92d599](https://github.com/veith/FuroBaseComponents/commit/d92d599))





# [0.35.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.34.6...@furo/data@0.35.0) (2019-06-10)


### Bug Fixes

* correct event name in doc ([ed0a466](https://github.com/veith/FuroBaseComponents/commit/ed0a466))


### Features

* furo-deep-link usable without attributes and full test coverage ([37388c0](https://github.com/veith/FuroBaseComponents/commit/37388c0))





## [0.34.6](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.34.5...@furo/data@0.34.6) (2019-06-07)

**Note:** Version bump only for package @furo/data





## [0.34.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.34.4...@furo/data@0.34.5) (2019-06-06)


### Bug Fixes

* active filter should be cleared, if the filter array is empty ([365341e](https://github.com/veith/FuroBaseComponents/commit/365341e))





## [0.34.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.34.3...@furo/data@0.34.4) (2019-06-06)

**Note:** Version bump only for package @furo/data





## [0.34.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.34.2...@furo/data@0.34.3) (2019-06-05)

**Note:** Version bump only for package @furo/data





## [0.34.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.34.1...@furo/data@0.34.2) (2019-06-05)

**Note:** Version bump only for package @furo/data





## [0.34.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.34.0...@furo/data@0.34.1) (2019-06-04)

**Note:** Version bump only for package @furo/data





# [0.34.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.33.2...@furo/data@0.34.0) (2019-05-26)


### Features

* Dokumentation ([c10c969](https://github.com/veith/FuroBaseComponents/commit/c10c969))





## [0.33.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.33.1...@furo/data@0.33.2) (2019-05-24)

**Note:** Version bump only for package @furo/data





## [0.33.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.33.0...@furo/data@0.33.1) (2019-05-23)


### Bug Fixes

* publish error ([0e10b0b](https://github.com/veith/FuroBaseComponents/commit/0e10b0b))





# [0.33.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.32.3...@furo/data@0.33.0) (2019-05-23)


### Features

* framework init ([8c638b1](https://github.com/veith/FuroBaseComponents/commit/8c638b1))





## [0.32.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.32.2...@furo/data@0.32.3) (2019-05-23)

**Note:** Version bump only for package @furo/data





## [0.32.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.32.1...@furo/data@0.32.2) (2019-05-21)

**Note:** Version bump only for package @furo/data





## [0.32.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.32.0...@furo/data@0.32.1) (2019-05-21)

**Note:** Version bump only for package @furo/data





# [0.32.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.31.1...@furo/data@0.32.0) (2019-05-21)


### Features

* notifiy data-injected completed via event ([b023f72](https://github.com/veith/FuroBaseComponents/commit/b023f72))





## [0.31.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.31.0...@furo/data@0.31.1) (2019-05-19)

**Note:** Version bump only for package @furo/data





# [0.31.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.30.3...@furo/data@0.31.0) (2019-05-19)


### Features

* set and update query params on collection agent ([26376c5](https://github.com/veith/FuroBaseComponents/commit/26376c5))





## [0.30.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.30.2...@furo/data@0.30.3) (2019-05-04)


### Bug Fixes

* furo-entity-agent microtiming issues fixed ([947881d](https://github.com/veith/FuroBaseComponents/commit/947881d))





## [0.30.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.30.1...@furo/data@0.30.2) (2019-05-03)

**Note:** Version bump only for package @furo/data





## [0.30.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.30.0...@furo/data@0.30.1) (2019-05-03)

**Note:** Version bump only for package @furo/data





# [0.30.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.29.3...@furo/data@0.30.0) (2019-05-03)


### Features

* furo-collection-agent accepts link object on ƒ-hts-in ([e83a0ca](https://github.com/veith/FuroBaseComponents/commit/e83a0ca))





## [0.29.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.29.2...@furo/data@0.29.3) (2019-05-02)


### Bug Fixes

* default value deep props ([c0b4e73](https://github.com/veith/FuroBaseComponents/commit/c0b4e73))
* field_violations array on errors can have any type ([22d2d26](https://github.com/veith/FuroBaseComponents/commit/22d2d26))





## [0.29.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.29.1...@furo/data@0.29.2) (2019-04-26)


### Bug Fixes

* dispatch error detail body with event response-failed ([3cce53b](https://github.com/veith/FuroBaseComponents/commit/3cce53b))





## [0.29.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.29.0...@furo/data@0.29.1) (2019-04-26)


### Bug Fixes

* set error message only if description is given ([0166d57](https://github.com/veith/FuroBaseComponents/commit/0166d57))





# [0.29.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.28.3...@furo/data@0.29.0) (2019-04-26)


### Features

* error handling ([a7f50e0](https://github.com/veith/FuroBaseComponents/commit/a7f50e0))





## [0.28.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.28.2...@furo/data@0.28.3) (2019-04-25)

**Note:** Version bump only for package @furo/data





## [0.28.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.28.1...@furo/data@0.28.2) (2019-04-25)


### Bug Fixes

* response error ([6269a3e](https://github.com/veith/FuroBaseComponents/commit/6269a3e))





## [0.28.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.28.0...@furo/data@0.28.1) (2019-04-22)


### Bug Fixes

* furo-entity-agent response-error ([36dd396](https://github.com/veith/FuroBaseComponents/commit/36dd396))





# [0.28.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.10...@furo/data@0.28.0) (2019-04-22)


### Features

* furo-entity-agent dispatches detailed events for load, save, create and delete ([0f42969](https://github.com/veith/FuroBaseComponents/commit/0f42969))





## [0.27.10](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.9...@furo/data@0.27.10) (2019-04-19)

**Note:** Version bump only for package @furo/data





## [0.27.9](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.8...@furo/data@0.27.9) (2019-04-19)

**Note:** Version bump only for package @furo/data





## [0.27.8](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.7...@furo/data@0.27.8) (2019-04-11)

**Note:** Version bump only for package @furo/data





## [0.27.7](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.6...@furo/data@0.27.7) (2019-04-11)

**Note:** Version bump only for package @furo/data





## [0.27.6](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.5...@furo/data@0.27.6) (2019-04-11)

**Note:** Version bump only for package @furo/data





## [0.27.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.4...@furo/data@0.27.5) (2019-04-08)

**Note:** Version bump only for package @furo/data





## [0.27.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.3...@furo/data@0.27.4) (2019-04-07)

**Note:** Version bump only for package @furo/data





## [0.27.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.2...@furo/data@0.27.3) (2019-04-07)

**Note:** Version bump only for package @furo/data





## [0.27.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.1...@furo/data@0.27.2) (2019-04-06)

**Note:** Version bump only for package @furo/data





## [0.27.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.27.0...@furo/data@0.27.1) (2019-04-06)

**Note:** Version bump only for package @furo/data





# [0.27.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.26.1...@furo/data@0.27.0) (2019-04-06)


### Features

* furo-collection-agent list-on-hts-in ([9c9eb50](https://github.com/veith/FuroBaseComponents/commit/9c9eb50))
* furo-data-collection-dropdown ([d761a1f](https://github.com/veith/FuroBaseComponents/commit/d761a1f))





## [0.26.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.26.0...@furo/data@0.26.1) (2019-04-06)


### Bug Fixes

* furo-entity-agent delete follows rel delete ([45b9349](https://github.com/veith/FuroBaseComponents/commit/45b9349))





# [0.26.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.25.5...@furo/data@0.26.0) (2019-04-05)


### Features

* EntityNode accepts only documented fields ([4639aa2](https://github.com/veith/FuroBaseComponents/commit/4639aa2))





## [0.25.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.25.4...@furo/data@0.25.5) (2019-04-05)


### Bug Fixes

* timing for --pageActivated changed ([a522661](https://github.com/veith/FuroBaseComponents/commit/a522661))





## [0.25.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.25.3...@furo/data@0.25.4) (2019-04-04)

**Note:** Version bump only for package @furo/data





## [0.25.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.25.2...@furo/data@0.25.3) (2019-04-04)

**Note:** Version bump only for package @furo/data





## [0.25.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.25.1...@furo/data@0.25.2) (2019-04-04)

**Note:** Version bump only for package @furo/data





## [0.25.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.25.0...@furo/data@0.25.1) (2019-04-04)

**Note:** Version bump only for package @furo/data





# [0.25.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.24.1...@furo/data@0.25.0) (2019-04-04)


### Features

* [@event](https://github.com/event) response-hts-updated ([820a540](https://github.com/veith/FuroBaseComponents/commit/820a540))





## [0.24.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.24.0...@furo/data@0.24.1) (2019-04-04)


### Bug Fixes

* mixin for label ([ffc316d](https://github.com/veith/FuroBaseComponents/commit/ffc316d))





# [0.24.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.23.0...@furo/data@0.24.0) (2019-04-03)


### Bug Fixes

* entity-object notify data changes ([c064df5](https://github.com/veith/FuroBaseComponents/commit/c064df5))


### Features

* furo-entity-field ([71bc178](https://github.com/veith/FuroBaseComponents/commit/71bc178))
* entity-object notify data changes ([8ab2422](https://github.com/veith/FuroBaseComponents/commit/8ab2422))





# [0.23.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.22.0...@furo/data@0.23.0) (2019-04-03)


### Features

* furo-filter ([2fc6889](https://github.com/veith/FuroBaseComponents/commit/2fc6889))





# [0.22.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.21.0...@furo/data@0.22.0) (2019-04-02)


### Features

* furo-input initial values from attribute ([df9519f](https://github.com/veith/FuroBaseComponents/commit/df9519f))





# [0.21.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.20.0...@furo/data@0.21.0) (2019-04-02)


### Features

* call furo-collection-agent before hts waits for hts ([edce82f](https://github.com/veith/FuroBaseComponents/commit/edce82f))
* furo-collection-agent ƒ-clear-filter ([4f504f5](https://github.com/veith/FuroBaseComponents/commit/4f504f5))





# [0.20.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.19.3...@furo/data@0.20.0) (2019-04-01)


### Features

* furo-collection-agent accepts fields, order-by and filter ([76010f2](https://github.com/veith/FuroBaseComponents/commit/76010f2))
* collection-filter ([71d855b](https://github.com/veith/FuroBaseComponents/commit/71d855b))





## [0.19.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.19.2...@furo/data@0.19.3) (2019-04-01)


### Bug Fixes

* data collection ([f47f2c9](https://github.com/veith/FuroBaseComponents/commit/f47f2c9))
* dataAsArray removed. Wrong place. ([7366454](https://github.com/veith/FuroBaseComponents/commit/7366454))





## [0.19.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.19.1...@furo/data@0.19.2) (2019-04-01)


### Bug Fixes

* hts update event ([d07fbf7](https://github.com/veith/FuroBaseComponents/commit/d07fbf7))





## [0.19.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.19.0...@furo/data@0.19.1) (2019-04-01)


### Bug Fixes

* hts update event ([77a5e19](https://github.com/veith/FuroBaseComponents/commit/77a5e19))
* hts update event ([fb36622](https://github.com/veith/FuroBaseComponents/commit/fb36622))





# [0.19.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.18.0...@furo/data@0.19.0) (2019-03-31)


### Features

* furo-custom-method fires event hts-updated, so you can rewire it to ƒ-trigger ([ce9f769](https://github.com/veith/FuroBaseComponents/commit/ce9f769))





# [0.18.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.17.1...@furo/data@0.18.0) (2019-03-30)


### Bug Fixes

* furo-deep-link defensive copy ([304914f](https://github.com/veith/FuroBaseComponents/commit/304914f))


### Features

* append-object ([9956121](https://github.com/veith/FuroBaseComponents/commit/9956121))





## [0.17.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.17.0...@furo/data@0.17.1) (2019-03-30)


### Bug Fixes

* deep link Api Prefix from environment prepend ([ef387e7](https://github.com/veith/FuroBaseComponents/commit/ef387e7))
* deep link objects ([5c84808](https://github.com/veith/FuroBaseComponents/commit/5c84808))
* furo-deep-link hts-out ([598c04c](https://github.com/veith/FuroBaseComponents/commit/598c04c))
* furo-deep-link prefix removed ([82ccf1c](https://github.com/veith/FuroBaseComponents/commit/82ccf1c))
* furo-reverse-deep-link matches ([b17e181](https://github.com/veith/FuroBaseComponents/commit/b17e181))





# [0.17.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.16.2...@furo/data@0.17.0) (2019-03-30)


### Features

* notify config changes via config-updated event ([cfea34c](https://github.com/veith/FuroBaseComponents/commit/cfea34c))





## [0.16.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.16.1...@furo/data@0.16.2) (2019-03-29)


### Bug Fixes

* hts-updated ([8013b4e](https://github.com/veith/FuroBaseComponents/commit/8013b4e))





## [0.16.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.16.0...@furo/data@0.16.1) (2019-03-29)

**Note:** Version bump only for package @furo/data





# [0.16.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.15.0...@furo/data@0.16.0) (2019-03-28)


### Features

* furo-app-flow-router ([eed5a29](https://github.com/veith/FuroBaseComponents/commit/eed5a29))





# [0.15.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.14.6...@furo/data@0.15.0) (2019-03-26)


### Features

* furo-reverse-deep-link ([b049103](https://github.com/veith/FuroBaseComponents/commit/b049103))





## [0.14.6](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.14.5...@furo/data@0.14.6) (2019-03-26)

**Note:** Version bump only for package @furo/data





## [0.14.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.14.4...@furo/data@0.14.5) (2019-03-26)

**Note:** Version bump only for package @furo/data





## [0.14.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.14.3...@furo/data@0.14.4) (2019-03-26)

**Note:** Version bump only for package @furo/data





## [0.14.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.14.2...@furo/data@0.14.3) (2019-03-25)


### Bug Fixes

* timeout ([d769a1a](https://github.com/veith/FuroBaseComponents/commit/d769a1a))





## [0.14.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.14.1...@furo/data@0.14.2) (2019-03-24)

**Note:** Version bump only for package @furo/data





## [0.14.1](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.14.0...@furo/data@0.14.1) (2019-03-24)

**Note:** Version bump only for package @furo/data





# [0.14.0](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.13.5...@furo/data@0.14.0) (2019-03-24)


### Features

* furo-collection contains furo/route ([2ba26ca](https://github.com/veith/FuroBaseComponents/commit/2ba26ca))





## [0.13.5](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.13.4...@furo/data@0.13.5) (2019-03-24)

**Note:** Version bump only for package @furo/data





## [0.13.4](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.13.3...@furo/data@0.13.4) (2019-03-21)

**Note:** Version bump only for package @furo/data





## [0.13.3](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.13.2...@furo/data@0.13.3) (2019-03-21)

**Note:** Version bump only for package @furo/data





## [0.13.2](https://github.com/veith/FuroBaseComponents/compare/@furo/data@0.13.1...@furo/data@0.13.2) (2019-03-21)


### Bug Fixes

* wrong fbp version ([7972ef6](https://github.com/veith/FuroBaseComponents/commit/7972ef6))





## 0.13.1 (2019-03-21)


### Bug Fixes

* reimport ([0db9345](https://github.com/veith/FuroBaseComponents/commit/0db9345))
