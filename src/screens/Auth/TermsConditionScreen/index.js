import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity,Image} from 'react-native';
import {vh, vw} from '../../../units';
import styles from './styles';
import { icons } from '../../../assets/images';
import TextWrapper from '../../../components/TextWrapper';
import theme from '../../../utils/theme';

class TermsConditionScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      agreeToTerms: false,

    }
  }

  
  render() {
    return (
      <View style={styles.mainContainer}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollArea}>
          <View style={styles.MainContent}>
            <View style={styles.MainBox}>
              <View style={styles.MainBoxCol}>
                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  TERMS OF USE
                </Text>

                <Text style={[styles.txt3, { textAlign: 'center' }]}>
                  NO PURCHASE IS NECESSARY TO DOWNLOAND THE IFUNTOLOGY MOBILE APPLICAITON. HOWEVER, WIHTIN THE APPLICATION THERE ARE SERVICES AND PRODUCTS WHICH DO REQUIRE PURCHASE AND SOME WHICH DO NOT REQUIRE PURCHASE. A PURCHASE WILL NOT INCREASE YOUR CHANCES OF WINNING. ALL FEDERAL, STATE, LOCAL, AND MUNICIPAL LAWS AND REGULATIONS APPLY. VOID WHERE PROHIBITED.
                </Text>

                <Text style={styles.txt2}>
                  By downloading, browsing, accessing or using this the Ifuntology application (“Mobile Application”), you agree to be bound by these Terms and Conditions of Use. We reserve the right to amend these terms and conditions at any time. If you disagree with any of these Terms and Conditions of Use, you must immediately discontinue your access to the Mobile Application and your use of the services offered on the Mobile Application. Continued use of the Mobile Application will constitute acceptance of these Terms and Conditions of Use, as may be amended from time to time.
                </Text>

                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  DEFINITIONS
                </Text>

                <Text style={[styles.txt3, { marginBottom: 0 }]}>
                  In these Terms and Conditions of Use, the following capitalized terms shall have the following meanings, except where the context otherwise requires:{"\n"}
                </Text>
                <Text style={styles.txt2}>
                  •	"Account" means an account created by a User on the Mobile Application as part of Registration.{"\n\n"}
                  •	"Merchant" refers to any entity whose products or Samples can be purchased and/or redeemed (as the case may be) via the Mobile Application.{"\n\n"}
                  •	"Privacy Policy" means the privacy policy set out in Clause 14 of these Terms and Conditions of Use.{"\n\n"}
                  •	"Redeem" means to redeem a Merchant’s products or Samples on these Terms and Conditions of Use.{"\n\n"}
                  •	"Redemption" means the act of redeeming such products or Samples.{"\n\n"}
                  •	"Register" means to create an Account on the Mobile Application and "Registration" means the act of creating such an Account.{"\n\n"}
                  •	"Samples" means samples of Merchant’s products and/or Merchant’s services, including without limitation, any vouchers for the redemption of such services, and "Sample" means any one of them.{"\n\n"}
                  •	"Services" means all the services provided by Ifuntology via the Mobile Application to Users, and "Service" means any one of them.{"\n\n"}
                  •	"Users" means users of the Mobile Application, including you and "User" means any one of them.{"\n\n"}
                </Text>

                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  GENERAL ISSUES ABOUT THE MOBILE APPLICATION AND THE SERVICES
                </Text>

                <Text style={[styles.txt3, { marginBottom: 0 }]}>
                  In these Terms and Conditions of Use, the following capitalized terms shall have the following meanings, except where the context otherwise requires:{"\n"}
                </Text>
                <Text style={styles.txt2}>
                  Applicability of terms and conditions: The use of any Services and/or the Mobile Application and the making of any Redemptions are subject to these Terms and Conditions of Use.
                  {"\n\n"}
                  Location: The Mobile Application, the Services and any Redemptions are intended solely for use by Users who access the Mobile Application in the U.S. We make no representation that the Services (or any goods or services) are available or otherwise suitable for use outside of the U.S. Notwithstanding the above, if you access the Mobile Application, use the Services or make any Redemptions from locations outside the U.S., you do so on your own initiative and are responsible for the consequences and for compliance with all applicable laws.
                  {"\n\n"}
                  Scope: The Mobile Application, the Services and any Redemptions are for your non-commercial, personal use only and must not be used for business purposes.
                  {"\n\n"}
                  Prevention on use: We reserve the right to prevent you using the Mobile Application and the Service (or any part of them) and to prevent you from making any Redemptions.
                  {"\n\n"}
                  Equipment and Networks: The provision of the Services and the Mobile Application does not include the provision of a mobile telephone or handheld device or other necessary equipment to access the Mobile Application or the Services or make any Redemptions. To use the Mobile Application or Services or to make Redemptions, you will require Internet connectivity and appropriate telecommunication links. You acknowledge that the terms of agreement with your respective mobile network provider ("Mobile Provider") will continue to apply when using the Mobile Application. As a result, you may be charged by the Mobile Provider for access to network connection services for the duration of the connection while accessing the Mobile Application or any such third party charges as may arise. You accept responsibility for any such charges that arise.
                  {"\n\n"}
                  Permission to use Mobile Application: If you are not the bill payer for the mobile telephone or handheld device being used to access the Mobile Application, you will be assumed to have received permission from the bill payer for using the Mobile Application.
                  {"\n\n"}
                  License to Use Material: By submitting any text or images (including photographs) (“Material”) via the Application, you represent that you are the owner of the Material, or have proper authorization from the owner of the Material to use, reproduce and distribute it. You hereby grant us a worldwide, royalty-free, non-exclusive license to use the Material to promote any products or services.
                </Text>


                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  REDEMPTIONS
                </Text>

                <Text style={styles.txt2}>
                  Need for registration: You must Register to make a Redemption from the Mobile Application.
                  {"\n\n"}
                  Application of these Terms and Conditions of Use: By making any Redemption, you acknowledge that the Redemption is subject to these Terms and Conditions of Use.
                  {"\n\n"}
                  Redemption: Any attempted Redemption not consistent with these Terms and Conditions of Use may be disallowed or rendered void at our or the relevant Merchant’s discretion.
                  {"\n\n"}
                  Responsibility for Redemptions of perishable products of Samples: Each Merchant shall be responsible to ensure that any of its products or Samples for Redemption that are perishable has not expired.
                  {"\n\n"}
                  Restrictions: (a) Reproduction, sale, resale or trading of any products or Samples or Redeemed products is prohibited.
                  {"\n\n"}
                  Ifuntology LLC Not Liable: For the avoidance of doubt, Ifuntology shall not be liable for any losses or damages suffered by you resulting from a your participation with any services or product provide within the application.
                  {"\n\n"}
                  Lost/stolen: Neither we nor any Merchant shall be responsible for lost or stolen Samples or products that have been Redeemed.
                </Text>


                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  LOCATION ALERTS AND NOTIFICATIONS
                </Text>

                <Text style={styles.txt2}>
                  You agree to receive pre-programmed notifications (“Location Alerts”) on the Mobile Application from if you have not turned opted out or turned off the notification or locational services on your mobile telephone or other handheld devices (as the case may be).
                </Text>


                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  YOUR OBLIGATIONS
                </Text>

                <Text style={styles.txt2}>
                  Ifuntology terms: You agree to (and shall) abide by the terms and conditions set by Ifuntology for of the relevant Redemption which may be amended from time to time.
                  {"\n\n"}
                  Accurate information: You warrant that all information provided on Registration and contained as part of your Account is true, complete and accurate and that you will promptly inform us of any changes to such information by updating the information in your Account.
                  {"\n\n"}
                  Content on the Mobile Application and Service: It is your responsibility to ensure that any products, Samples or information available through the Mobile Application or the Services meet your specific requirements before making any Redemption.
               </Text>


                <Text style={styles.txt2}>
                  {"\n"}
                  Prohibitions in relation to usage of Services or Mobile Application: Without limitation, you undertake not to use or permit anyone else to use the Services or Mobile Application: {"\n\n"}
                  •	to send or receive any material which is not civil or tasteful {"\n"}
                  •	to send or receive any material which is threatening, grossly offensive, of an indecent, obscene or menacing character, blasphemous or defamatory of any person, in contempt of court or in breach of confidence, copyright, rights of personality, publicity or privacy or any other third party rights;{"\n"}
                  •	to send or receive any material for which you have not obtained all necessary licences and/or approvals (from us or third parties); or which constitutes or encourages conduct that would be considered a criminal offence, give rise to civil liability, or otherwise be contrary to the law of or infringe the rights of any third party in any country in the world;{"\n"}
                  •	to send or receive any material which is technically harmful (including computer viruses, logic bombs, Trojan horses, worms, harmful components, corrupted data or other malicious software or harmful data);{"\n"}
                  •	to cause annoyance, inconvenience or needless anxiety;{"\n"}
                  •	to intercept or attempt to intercept any communications transmitted by way of a telecommunications system;{"\n"}
                  •	for a purpose other than which we have designed them or intended them to be used;{"\n"}
                  •	for any fraudulent purpose;{"\n"}
                  •	other than in conformance with accepted Internet practices and practices of any connected networks;{"\n"}
                  •	in any way which is calculated to incite hatred against any ethnic, religious or any other minority or is otherwise calculated to adversely affect any individual, group or entity; or{"\n"}
                  •	in such a way as to, or commit any act that would or does, impose an unreasonable or disproportionately large load on our infrastructure.{"\n"}
                </Text>



                <Text style={styles.txt2}>
                  {"\n"}
                  Prohibitions in relation to usage of Services, Mobile Application: Without limitation, you further undertake not to or permit anyone else to:{"\n"}
                    •	resell any products or Samples;{"\n"}
                    •	furnish false data including false names, addresses and contact details and fraudulently use credit/debit card numbers;{"\n"}
                    •	attempt to circumvent our security or network including to access data not intended for you, log into a server or account you are not expressly authorised to access, or probe the security of other networks (such as running a port scan);{"\n"}
                    •	execute any form of network monitoring which will intercept data not intended for you;{"\n"}
                    •	enter into fraudulent interactions or transactions with us or a Merchant (including interacting or transacting purportedly on behalf of a third party where you have no authority to bind that third party or you are pretending to be a third party);{"\n"}
                    •	extract data from or hack into the Mobile Application;{"\n"}
                    •	 use the Services or Mobile Application in breach of these Terms and Conditions of Use;{"\n"}{"\n"}
                  engage in any unlawful activity in connection with the use of the Mobile Application or the Services; or{"\n"}
                  engage in any conduct which, in our exclusive reasonable opinion, restricts or inhibits any other customer from properly using or enjoying the Mobile Application or Services.
                 </Text>


                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  RULES ABOUT USE OF THE SERVICE AND THE MOBILE APPLICATION
                </Text>

                <Text style={styles.txt2}>
                  •	We will use reasonable actions to correct any errors or omissions as soon as practicable after being notified of them. However, we do not guarantee that the Services or the Mobile Application will be free of faults, and we do not accept liability for any such faults, errors or omissions. In the event of any such error, fault or omission, you should report it by contacting us at contact@gohardfinishstrong.com.
                  {"\n\n"}
                  •	We do not warrant that your use of the Services or the Mobile Application will be uninterrupted and we do not warrant that any information (or messages) transmitted via the Services or the Mobile Application will be transmitted accurately, reliably, in a timely manner or at all. Notwithstanding that we will try to allow uninterrupted access to the Services and the Mobile Application, access to the Services and the Mobile Application may be suspended, restricted or terminated at any time.
                  {"\n\n"}
                  •	We do not give any warranty that the Services and the Mobile Application are free from viruses or anything else which may have a harmful effect on any technology.
                  {"\n\n"}
                  •	We reserve the right to change, modify, substitute, suspend or remove without notice any information or Services on the Mobile Application from time to time. Your access to the Mobile Application and/or the Services may also be occasionally restricted to allow for repairs, maintenance or the introduction of new facilities or services. We will attempt to restore such access as soon as we reasonably can. For the avoidance of doubt, we reserve the right to withdraw any information or Services from the Mobile Application at any time.
                  {"\n\n"}
                  •	We reserve the right to block access to and/or to edit or remove any material which in our reasonable opinion may give rise to a breach of these Terms and Conditions of Use.
                </Text>


                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  CHALLENGE RULES FOR ANY CHALLENGE WHICH DOES NOT REQUIRE PAYMENT TO ENTER
                </Text>

                <Text style={styles.txt2}>
                  NO PURCHASE IS NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR CHANCES OF WINNING. ALL FEDERAL, STATE, LOCAL, AND MUNICIPAL LAWS AND REGULATIONS APPLY. VOID WHERE PROHIBITED.{"\n"}
                  Participation in the Challenge constitutes entrant's full and unconditional agreement to and acceptance of these Official Rules and the decisions of the Ifuntology LLC , which are final and binding. Winning a prize is contingent upon being compliant with these Official Rules and fulfilling all other requirements set forth herein:
                  {"\n\n"}
                </Text>

                <Text style={styles.txt2}>
                  •	Unless otherwise specified, only legal U.S. residents who are 18 years of age with a valid Social Security number at the time of entry are eligible to participate in Station Challenges.
                  {"\n\n"}
                  •	All State, Local, Federal and or other taxes, duties, tariffs, title fees, licensing fees, or other fees for prizes awarded become the sole responsibility of the winner. All those who win a prize or prizes valued $500 or more will be issued an IRS Form 1099 to report their winnings.
                  {"\n\n"}
                  •	All prizes are awarded “as is.” Prizes are nontransferable and cannot be exchanged, sold, or redeemed for cash or other prizes.
                  {"\n\n"}
                  •	The potential winners will be selected at the end of each challenge based on their ranking completion in the challenge. The participant who is ranked the highest or is in the number one spot will be selected as the winner on each challenge. The Ifuntology LLC  will attempt to notify the potential winner via telephone or email. If the potential winner cannot be contacted within five (5) days after the date of the first attempt to contact him/her, the Ifuntology LLC  may select an alternate potential winner in his/her place at based on the same ranking system following the order or highest rank to lowest.
                    {"\n\n"}
                  •	The potential winners will be notified by email or phone. Each potential Grand and First Prize winner (parent/legal guardian if a minor in his/her state of residence) will be required to complete, electronically sign and submit a Declaration of Compliance within five (5) days of the date notice or attempted notice is sent, in order to claim his/her prize. If the potential winner is at least 18 but still considered a minor in his/her jurisdiction of residence, Ifuntology LLC  reserves the right to award the prize in the name of his/her parent or legal guardian, who will be required to sign the Declaration of Compliance on the potential winners behalf and fulfill any other requirements imposed on winner set forth herein.
                    {"\n\n"}
                  •	All entry information and user information on the application gathered during the course of entry, as well as all information contained on or within, shall become the sole property of the Ifuntology LLC to be used, disposed of or destroyed in their sole discretion.
                    {"\n\n"}
                  •	Ifuntology LLC is not responsible for any incorrect or inaccurate information submitted by Challenge participants or entered by websites users, and assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to the Station’s website.
                    {"\n\n"}
                  •	By participating in the Challenge, entrants agree to release and hold harmless Ifuntology LLC and other companies associated with the Challenge, and each of their respective officers, directors, employees, shareholders, representatives, and agents (the Released Parties) from and against any claim or cause of action arising out of participation in the Challenge or receipt or use of the prize (including any travel or activity related thereto), including, but not limited to: (a) any technical errors associated with the Challenge; (b) unauthorized human intervention in the Challenge; (c) mechanical, network, electronic, computer, human, printing or typographical errors; (d) application downloads, (e) any other errors or problems in connection with the Challenge; or (f) injury, death, losses or damages of any kind, to persons or property which may be caused, directly or indirectly, in whole or in part, from entrants participation in the Challenge or acceptance, receipt or misuse of the prize (including any travel or activity related thereto).
                    {"\n\n"}
                  •	By participating in a Ifuntology LLC Challenge, participants agree to be bound by the decisions of Ifuntology LLC personnel. Persons who violate any rule, gain unfair advantage in participating in the Challenge, or obtain winner status using fraudulent means will be disqualified.
                    {"\n\n"}
                  •	Ifuntology LLC reserves the right to limit the number of times an individual may enter a Challenge or drawing.
                   {"\n\n"}
                  •	Apple Inc. is in no way or form responsible, liable nor are they involved in any way or from with the challenges, contest or sweepstakes offered by Ifuntology
                </Text>


                <Text style={[styles.txt1, { textAlign: 'center' }]}>
                  CHALLENGE RULES FOR ANY CHALLENGE WHICH REQUIRE PAYMENT TO ENTER
                </Text>

                <Text style={styles.txt2}>
                  PURCHASE IS NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR CHANCES OF WINNING. ALL FEDERAL, STATE, LOCAL, AND MUNICIPAL LAWS AND REGULATIONS APPLY. VOID WHERE PROHIBITED.{"\n"}
                  Participation in the Challenge constitutes entrant's full and unconditional agreement to and acceptance of these Official Rules and the decisions of the Ifuntology LLC , which are final and binding. Winning a prize is contingent upon being compliant with these Official Rules and fulfilling all other requirements set forth herein:
                  {"\n\n"}
                </Text>


                <Text style={styles.txt2}>
                  •	Unless otherwise specified, only legal U.S. residents who are 18 years of age with a valid Social Security number at the time of entry are eligible to participate in Station Challenges.
                   {"\n\n"}
                  •	All State, Local, Federal and or other taxes, duties, tariffs, title fees, licensing fees, or other fees for prizes awarded become the sole responsibility of the winner. All those who win a prize or prizes valued $500 or more will be issued an IRS Form 1099 to report their winnings.
                   {"\n\n"}
                  •	All prizes are awarded “as is.” Prizes are nontransferable and cannot be exchanged, sold, or redeemed for cash or other prizes.
                   {"\n\n"}
                  •	The potential winners will be selected at the end of each challenge based on their ranking completion in the challenge. The participant who is ranked the highest or is in the number one spot will be selected as the winner on each challenge. The Ifuntology LLC  will attempt to notify the potential winner via telephone or email. If the potential winner cannot be contacted within five (5) days after the date of the first attempt to contact him/her, the Ifuntology LLC  may select an alternate potential winner in his/her place at based on the same ranking system following the order or highest rank to lowest.
                   {"\n\n"}
                  •	The potential winners will be notified by email or phone. Each potential Grand and First Prize winner (parent/legal guardian if a minor in his/her state of residence) will be required to complete, electronically sign and submit a Declaration of Compliance within five (5) days of the date notice or attempted notice is sent, in order to claim his/her prize. If the potential winner is at least 18 but still considered a minor in his/her jurisdiction of residence, Ifuntology LLC  reserves the right to award the prize in the name of his/her parent or legal guardian, who will be required to sign the Declaration of Compliance on the potential winners behalf and fulfill any other requirements imposed on winner set forth herein.
                   {"\n\n"}
                  •	All entry information and user information on the application gathered during the course of entry, as well as all information contained on or within, shall become the sole property of the Ifuntology LLC to be used, disposed of or destroyed in their sole discretion.
                   {"\n\n"}
                  •	Ifuntology LLC is not responsible for any incorrect or inaccurate information submitted by Challenge participants or entered by websites users, and assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to the Station’s website.
                   {"\n\n"}
                  •	By participating in the Challenge, entrants agree to release and hold harmless Ifuntology LLC and other companies associated with the Challenge, and each of their respective officers, directors, employees, shareholders, representatives, and agents (the Released Parties) from and against any claim or cause of action arising out of participation in the Challenge or receipt or use of the prize (including any travel or activity related thereto), including, but not limited to: (a) any technical errors associated with the Challenge; (b) unauthorized human intervention in the Challenge; (c) mechanical, network, electronic, computer, human, printing or typographical errors; (d) application downloads, (e) any other errors or problems in connection with the Challenge; or (f) injury, death, losses or damages of any kind, to persons or property which may be caused, directly or indirectly, in whole or in part, from entrants participation in the Challenge or acceptance, receipt or misuse of the prize (including any travel or activity related thereto).
                   {"\n\n"}
                  •	By participating in a Ifuntology LLC Challenge, participants agree to be bound by the decisions of Ifuntology LLC personnel. Persons who violate any rule, gain unfair advantage in participating in the Challenge, or obtain winner status using fraudulent means will be disqualified.
                   {"\n\n"}
                  •	Ifuntology LLC reserves the right to limit the number of times an individual may enter a Challenge or drawing.
                   {"\n\n"}
                  •	No Refunds will be granted once payment is made for the challenge.
                   {"\n\n"}
                  •	Apple Inc. is in no way or form responsible, liable nor are they involved in any way or from with the challenges, contest or sweepstakes offered by Ifuntology
                </Text>

              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 4 * vh }}>
          <TouchableOpacity
                onPress={()=> {
                  this.setState({agreeToTerms:!this.state.agreeToTerms});
                  this.props.navigation.navigate("RegisterScreen",{agree:true})
              }
                  }
                 style={{ flexDirection: 'row', marginTop: 2 * vh, paddingLeft: 8 * vw, alignItems: 'center' }}>
                    <View style={styles.box}>
                        {this.state.agreeToTerms===true?<Image  source={icons.tick}
                        style={{width:3*vw,height:3*vw,resizeMode:'contain'}}/>:null}
                    </View>
                    <TextWrapper style={{ color: theme.black, fontSize: 1.7 * vh }}>  I Agree to Terms & Conditions</TextWrapper>
                </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default TermsConditionScreen;
