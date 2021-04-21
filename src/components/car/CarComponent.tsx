import { Icon } from 'native-base';
import React from 'react';
import { Image, ImageStyle, Text, TouchableOpacity, View } from 'react-native';

import I18nManager from '../../I18n/I18nManager';
import BaseProps from '../../types/BaseProps';
import Car, { UserCar } from '../../types/Car';
import Utils from '../../utils/Utils';
import UserAvatar from '../user/avatar/UserAvatar';
import computeStyleSheet from './CarComponentStyle';

interface State {}

export interface Props extends BaseProps {
  car: Car;
  selected: boolean;
}

export default class CarComponent extends React.Component<Props, State> {
  public props: Props;
  public state: State;

  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public setState = (
    state: State | ((prevState: Readonly<State>, props: Readonly<Props>) => State | Pick<State, never>) | Pick<State, never>,
    callback?: () => void
  ) => {
    super.setState(state, callback);
  };

  public render() {
    const style = computeStyleSheet();
    const { car, selected, navigation } = this.props;
    const carUsers = car?.carUsers ?? [];
    const defaultCarUser = carUsers.find((carUser) => carUser.default);
    const defaultCarUserName = Utils.buildUserName(defaultCarUser?.user);
    const otherUserCount = Math.max(carUsers.length - 1, 0);
    const carFullName = Utils.buildCarCatalogName(car?.carCatalog);
    const userIDs = carUsers.map((userCar: UserCar) => userCar?.user?.id).filter((userID) => userID);
    return (
      <View style={selected ? [style.container, style.selected] : style.container}>
        <View style={style.header}>
          <View style={style.carNameContainer}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={[style.headerText, style.carName]}>
              {carFullName}
            </Text>
          </View>
          <View style={style.licensePlateContainer}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={[style.headerText, style.licensePlate]}>
              {car.licensePlate}
            </Text>
          </View>
        </View>
        <View />
        <View style={style.carContainer}>
          <View style={style.carInfos}>
            <TouchableOpacity
              disabled={!defaultCarUser?.user}
              onPress={() => {
                navigation.navigate('UsersNavigator', {
                  params: {
                    userIDs,
                    title: carFullName
                  },
                  key: `${Utils.randomNumber()}`
                });
              }}>
              <View style={style.userContainer}>
                <View style={[style.avatarContainer]}>
                  <UserAvatar small={true} user={defaultCarUser?.user} navigation={navigation} />
                </View>
                <View style={[style.userNameContainer]}>
                  <Text numberOfLines={1} ellipsizeMode={'tail'} style={[style.text, style.userName]}>
                    {defaultCarUserName}
                  </Text>
                  {otherUserCount > 0 && <Text style={style.text}>(+{I18nManager.formatNumber(otherUserCount)})</Text>}
                </View>
              </View>
            </TouchableOpacity>
            <View style={style.powerDetailsContainer}>
              <View style={style.columnContainer}>
                <Icon type="MaterialIcons" name="battery-full" style={style.icon} />
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={style.text}>
                  {car.carCatalog?.batteryCapacityFull} kWh
                </Text>
              </View>
              <View style={style.columnContainer}>
                <View style={style.iconContainer}>
                  <Icon style={style.icon} type="MaterialIcons" name="bolt" />
                  <Icon style={style.currentTypeIcon} type="MaterialIcons" name="power-input" />
                </View>
                {car?.carCatalog?.fastChargePowerMax ? (
                  <Text numberOfLines={1} style={style.text}>
                    {car?.carCatalog?.fastChargePowerMax} kW
                  </Text>
                ) : (
                  <Text style={style.text}>-</Text>
                )}
              </View>
              <View style={style.columnContainer}>
                <View style={style.iconContainer}>
                  <Icon style={style.icon} type="MaterialIcons" name="bolt" />
                  <Icon style={style.currentTypeIcon} type="MaterialCommunityIcons" name="sine-wave" />
                </View>
                <Text numberOfLines={1} style={style.text}>
                  {car?.converter?.powerWatts} kW ({car?.converter?.numberOfPhases})
                </Text>
              </View>
            </View>
          </View>
          <Image style={style.imageStyle as ImageStyle} source={{ uri: car?.carCatalog?.image }} />
        </View>
      </View>
    );
  }
}